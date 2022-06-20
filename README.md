# proxy2cors
Forwards requests to external apis with CORS

# How to use?

Environment Variables:
- PORT: Set the port that this proxy will be active on;
- If you are going to run with NodeJS, in the root of the project create an .env file based on .env.example:

With NodeJS - via Terminal:
- Ex: `yarn start`

With Docker - via Terminal:
- Ex: `docker run -dp your_port_host:PORT --env PORT=PORT --name your_proxy_name antenordev/proxy2cors`

Payload Format:
- Include the `target` property in the payload of the POST method, receiving the url of the external api that will forward the data.
    - Ex:
        ```js
            {
                "name": "Your Name",
                "email": "user@email.com",
                "target": "http://host-forwarding.com/api"
            }
        ```
- In the request header, must include Authorization if any.
- Proxy script will forward all information except the `target` it received in the request.
