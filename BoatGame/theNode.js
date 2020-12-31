function testingg() {
  var spawn = require('child_process');
const temperatures = []; // Store readings

const sensor = spawn('python', ['NeuralNetwork.py']);
sensor.stdout.on('data', function(data) {

    // convert Buffer object to Float
    temperatures.push(parseFloat(data));
    console.log(temperatures);
    return "hello";
});
}
