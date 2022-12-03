const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let cars = {
    'ferrari': {
        'make': 'Ferrari',
        'model': 458,
        'engineSize': '4.5L',
        'brakeHorsePower': '562', 
        'torque': '540 Nm',
        'fuelEconomy': '20 MPG',
        'doors': '2',
    },
    'porsche':{
        'make': 'Porsche',
        'model': 911,
        'engineSize': '3.5L',
        'brakeHorsePower': '385', 
        'torque': '450 Nm',
        'fuelEconomy': '26 MPG',
        'doors': '2',
    },
    'aston martin':{
        'make': 'Aston Martin',
        'model': 'Vantage',
        'engineSize': '4.0L',
        'brakeHorsePower': '503', 
        'torque': '685 Nm',
        'fuelEconomy': '24 MPG',
        'doors': '2',
    },
    'mclaren':{ 
        'make': 'McLaren',
        'model': '720S',
        'engineSize': '4.0L',
        'brakeHorsePower': '720', 
        'torque': '770 Nm',
        'fuelEconomy': '23 MPG',
        'doors': '2',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(cars)
})

app.get('/api/:car', (request, response) => {
    const carName = request.params.car.toLowerCase()
    if(cars[carName]){
        response.json(cars[carName])
    }else{
        response.json(cars['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})