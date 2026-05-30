import { NextRequest, NextResponse } from 'next/server'

const DADATA_SUGGEST_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'

export async function POST(req: NextRequest) {
    try {
        const { query } = await req.json()

        if (!query || typeof query !== 'string') {
            return NextResponse.json({ error: 'query is required' }, { status: 400 })
        }

        const apiKey = process.env.DADATA_API_KEY
        const secretKey = process.env.DADATA_SECRET_KEY

        if (!apiKey) {
            console.error('DADATA_API_KEY не задан в .env')
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
        }

        const response = await fetch(DADATA_SUGGEST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Token ${apiKey}`,
                ...(secretKey ? { 'X-Secret': secretKey } : {}),
            },
            body: JSON.stringify({
                query,
                count: 7,
                locations: [
                    {
                        region: 'Астраханская',
                        city: 'Астрахань',
                    },
                ],
                restrict_value: false,
                from_bound: { value: 'street' },
                to_bound: { value: 'house' },
            }),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Dadata API error:', response.status, errorText)
            return NextResponse.json({ error: 'Dadata request failed' }, { status: response.status })
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (err) {
        console.error('Dadata suggest route error:', err)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}