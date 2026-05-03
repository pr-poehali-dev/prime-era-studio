import os
import json
import urllib.request
import urllib.parse


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram @matreshki_pd"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    fmt = body.get('format', '').strip()
    utm = body.get('utm', {})

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'name and phone required'})
        }

    utm_parts = []
    if utm.get('source'):
        utm_parts.append(f"Источник: {utm['source']}")
    if utm.get('medium'):
        utm_parts.append(f"Канал: {utm['medium']}")
    if utm.get('campaign'):
        utm_parts.append(f"Кампания: {utm['campaign']}")
    if utm.get('content'):
        utm_parts.append(f"Кнопка: {utm['content']}")

    utm_text = '\n'.join(utm_parts) if utm_parts else 'прямой заход'

    text = (
        f"🎯 *Новая заявка — Prime Era*\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🏋️ Формат: {fmt or 'не выбран'}\n\n"
        f"📊 UTM:\n{utm_text}"
    )

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = '@matreshki_pd'

    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode('utf-8')

    req = urllib.request.Request(
        f'https://api.telegram.org/bot{bot_token}/sendMessage',
        data=payload,
        headers={'Content-Type': 'application/json'},
        method='POST'
    )

    with urllib.request.urlopen(req, timeout=10) as resp:
        result = json.loads(resp.read())

    if not result.get('ok'):
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'telegram error', 'detail': result})
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
