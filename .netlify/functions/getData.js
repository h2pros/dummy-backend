exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        // body: event.queryStringParameters
        body: {
            "timeSeries": ["9:00", "10:00", "11:00", "12:00",  "13:00", "14:00", "15:00"],
            "totalUsage": [ 12, 54, 13, 44, 22, 33, 35],
            "users": [
                {
                    'cold': [8, 34, 0, 4, 5, 15, 9],
                    'hot': [0, 10, 0, 0, 0, 5, 21],
                    'total': [8, 44, 0, 4, 5, 20, 30]
                },
                {
                    'cold': [4, 10, 13, 20, 4, 3, 0],
                    'hot': [0, 0, 0, 20, 13, 10, 5],
                    'total': [4, 10, 13, 40, 17, 13, 5]
                }
            ]
        }
    });
}