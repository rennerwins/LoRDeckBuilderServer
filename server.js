const express = require('express')
const app = express()
const set1 = require('./assets/set1-en_us.json')
const set2 = require('./assets/set2-en_us.json')

const VERSION = '1_4_0'
const data = [...set1, ...set2].map((card) => {
	return {
		...card,
		assets: [
			{
				gameAbsolutePath: `http://dd.b.pvp.net/${VERSION}/set1/en_us/img/cards/${card.cardCode}.png`,
				fullAbsolutePath: `http://dd.b.pvp.net/${VERSION}/set1/en_us/img/cards/${card.cardCode}-full.png`,
			},
		],
	}
})

const PORT = process.env.PORT || 4000

app.get('/cards', (req, res) => {
	res.json(data)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
