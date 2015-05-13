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
// Creamos un tercer círculo que irá en el centro
var circle3 = new Konva.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 7,
    fill: 'green',
    stroke: 'yellow',
    strokeWidth: 3
});
// Añadimos la opción draggable para poder mover los puntos
circle.draggable('true')
circle2.draggable('true')
//Hacemos que la línea sigua los dos puntos
circle.on('dragmove', function () {
    blueLine.points([circle.x(), circle.y(), circle2.x(), circle2.y()]);
    circle3.x((circle.x() + circle2.x()) / 2);
    circle3.y((circle.y() + circle2.y()) / 2);
    layer.draw();
});
circle2.on('dragmove', function () {
    blueLine.points([circle.x(), circle.y(), circle2.x(), circle2.y()]);
    circle3.x((circle.x() + circle2.x()) / 2);
    circle3.y((circle.y() + circle2.y()) / 2);
    layer.draw();
});
// Añadimos una pequeña instrucción
var simpleText = new Konva.Text({
    x: 15,
    y: 15,
    text: 'Arrastre cualquier círculo de los extremos',
    fontSize: 15,
    fontFamily: 'Calibri',
    fill: 'green'
});
// Añadimos los círculos y la línea al Layer
layer.add(blueLine);
layer.add(circle);
layer.add(circle2);
layer.add(circle3);
layer.add(simpleText);
// Añadimos el Layer al Stage
stage.add(layer);
