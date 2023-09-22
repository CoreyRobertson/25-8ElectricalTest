import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const data = await request.json();

    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'aud',
                    product_data: {
                        name: data.productData.name,
                        description: data.productData.description
                    },
                    unit_amount: data.productData.unit_amount
                },
                quantity: 1
            },
            {
                price_data: {
                    currency: 'aud',
                    product_data: {
                        name: data.gstData.name
                    },
                    unit_amount: data.gstData.unit_amount
                },
                quantity: 1
            }
        ],

        mode: 'payment',
        success_url: 'https://www.258electrical.com.au/Success',
        cancel_url: 'https://www.258electrical.com.au/Cancellation',
        shipping_address_collection: {
            allowed_countries: ['AU']
        },
        phone_number_collection: {
            enabled: true,
        },
    });


    return NextResponse.json(session.url);
}



