# app.py
import os
import stripe


def lambda_handler(event, context):
    """Sample Lambda function to handle Stripe Webhook Events

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format with a Webhook Event Payload

        Event doc: https://stripe.com/docs/api/events/object

    Returns
    ------
    Payment Intent: dict

        Return doc: https://stripe.com/docs/api/payment_intents/object
    """
    YOUR_DOMAIN = os.getenv('YOUR_DOMAIN')
    API_KEY = os.getenv('STRIPE_API_KEY')
    stripe.api_key = API_KEY

    priceIds = event['body'].split('&')
    # split "priceId1=price_abcdef&priceId2=price_ghijklm"
    # into [priceId1=..., priceId2=...]

    line_items = []
    for priceId in priceIds:
        line_items.append({
            'price': priceId.split('=', 1)[1],
            'quantity': 1,
        })

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=line_items,
            mode='payment',
            automatic_tax={
                'enabled': True,
            },
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/cancelled',
        )
    except Exception as e:
        return str(e)

    return {
        "statusCode": 303,
        "headers": {
            "Location": checkout_session.url,
        }
    }
