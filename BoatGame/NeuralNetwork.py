
"""
Created on Sat Dec 26 18:43:52 2020

@author: lysac


"""

import random
"""
from edge import Edge
"""

"""
Vector

PURPOSE: To simulate the construct of a vector in the element of R^n
It is also equipped with dot product

"""
import os
from http.server import HTTPServer, CGIHTTPRequestHandler
# Make sure the server is created at current directory
os.chdir('.')
# Create server object listening the port 80
server_object = HTTPServer(server_address=('', 8070), RequestHandlerClass=CGIHTTPRequestHandler)
# Start the web server
server_object.serve_forever()

@app.route("/BoatGame/neuralnetwork.py")
def my_webservice():
    return jsonify(result="the result")

class Vector:
    arr = []  #stores the vector

    def __init__(self):
        self.arr = []

    def setWithNodes(self, size):
        for x in range(size):
            self.arr.append(Node(random.random()))  #random numbers between 0 and 1

    def add(self, element):
        self.arr.append(element)

    def dotProduct(v1, v2):
        output = 0
        #both arrays need to be the same size
        for x in v1.arr:
            for y in v2.arr:
                print(x)
                print(y)
                output = output + x * y

        return output

    def getElement(self, index):
        return self.arr[index]

    def __str__(self):
        output = ""
        for x in self.arr:
            output = output + str(x) + " "
        return output

#Layer is a vector of nodes with special operations with regards to a neural
#Network
class Layer(Vector):

    def nudge(self, learningRate, expected, actual):
        #have to calcluate the actual value, then use the formula to see to see
        #what changes

        #do more research in how backpropigation algorithm works

        #expected is a vector

        for index in range(len(self.arr)):
            node = self.arr[index]
            target = expected[index]
            output = actual[index]

            for edge in node.edges.arr:
                edge.adjustWeight(target, output, learningRate)

        #check backpropagation first to see if it works

    def dotProduct(v1, v2):
        #v2 are nodes and v1 is the values
        output = 0
        #both arrays need to be the same size
        for x in v1.arr:
            for y in v2.arr:
                output += x * y.getWeight()

        return output

    def calculate(self, inputVector):
        #2 vectors, variables and weights

        #for each node in the next layer we want to find the dot product of the
        #edges connected to it

        #returns the value for just one node in the next layer
        output = Vector()

        for x in self.arr:
            output.add(Layer.dotProduct(inputVector, x.getEdgeVector()))

        #output is a vector
        return output



    def link(self, layerInput):
        #Might not work
        for x in self.arr:
            for y in layerInput.arr:
                e = Edge()
                e.setBegin(y)
                e.setEnd(x)
                x.addEdge(e)


#Nodes are data that stores the pointers to the edges connected to it
#edges are stored in a vector that represent the nodes connected to it
#going backwards in the NeuralNetwork graph
class Node:
    #data stored in the node, int?
    edges = Vector()   #edge vector

    def __init__(self, data):
        self.var = data

    def addEdge(self, e):
        self.edges.add(e)

    def getEdgeVector(self):
        return self.edges

    def getEdge(self, index):
        return self.edges[index]

    def findEdge(self, nodeEnd):
        return self.edges.findElement(nodeEnd)

    def __str__(self):
        return str(self.var) + " "


# a series of Layers with vectors of edges connecting them
class NeuralNetwork:
    layers = [Layer(), Layer(), Layer()]

    def __init__(self, sizeInput, sizeHidden, sizeOutput):
        self.layers[0] = Layer()
        self.layers[0].setWithNodes(sizeInput)

        #hidden layer(s)
        self.layers[1] = Layer()
        self.layers[1].setWithNodes(sizeInput)

        self.layers[2] = Layer()
        self.layers[2].setWithNodes(sizeInput)


        #initializing edges
        self.layers[1].link(self.layers[0])
        self.layers[2].link(self.layers[1])

    def getOutput(self, vector):
        calculatedVector = vector

        for index in range(1, len(self.layers)):
            calculatedVector = self.layers[index].calculate(calculatedVector)

        return calculatedVector

    def __str__(self):
        output = ""
        for x in self.layers:
            output = output + str(x)
        return output


def main():

    x = NeuralNetwork(5, 4, 5)

    y = Vector()

    for i in range(5):
        y.add(random.random())

    print(y)

    print(x.getOutput(y))

main()
