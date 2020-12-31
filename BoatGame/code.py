#!/usr/bin/python

print ("Content-type:text/html\n")
print ("<h1>This is the Home Page</h1>")

for i in range(5):
    print ("Item " + str(i) + "<br/>")

    import os
    from http.server import HTTPServer, CGIHTTPRequestHandler
    # Make sure the server is created at current directory
    os.chdir('.')
    # Create server object listening the port 80
    server_object = HTTPServer(server_address=('', 8070), RequestHandlerClass=CGIHTTPRequestHandler)
    # Start the web server
    server_object.serve_forever()
