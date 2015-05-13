// Primero Creamos el Stage
var stage = new Konva.Stage({
    container: 'container',
    width: 400,
    height: 400
});
// Creamos el Layer
var layer = new Konva.Layer();
// Creamos el primer Círculo
var circle = new Konva.Circle({
    x: stage.getWidth() / 2 - 50,
    y: stage.getHeight() / 2 - 50,
    radius: 7,
    fill: 'black',
    stroke: 'gray',
    strokeWidth: 3
});
// Creamos el segundo Círculo
var circle2 = new Konva.Circle({
    x: stage.getWidth() / 2 + 50,
    y: stage.getHeight() / 2 + 50,
    radius: 7,
    fill: 'black',
    stroke: 'gray',
    strokeWidth: 3
});
// Creamos la línea entre los dos círculos
var blueLine = new Konva.Line({
    points: [circle.x(), circle.y(), circle2.x(), circle2.y()],
    stroke: 'blue',
    strokeWidth: 10,
    linecap: 'round',
    linejoin: 'round'
});
// Añadimos los círculos y la línea al Layer
layer.add(blueLine);
layer.add(circle);
layer.add(circle2);
// Añadimos el Layer al Stage
stage.add(layer);
