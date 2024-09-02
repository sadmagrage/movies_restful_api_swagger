
window.onload = function() {
    // Build a system
    let url = window.location.search.match(/url=([^&]+)/);
    if (url && url.length > 1) {
      url = decodeURIComponent(url[1]);
    } else {
      url = window.location.origin;
    }
    let options = {
    "swaggerDoc": {
      "openapi": "3.0.0",
      "paths": {
        "/movie": {
          "get": {
            "operationId": "MovieController_findAllAndJoinGenre",
            "parameters": [],
            "responses": {
              "200": {
                "description": "Return the list of Movies",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Movie"
                      }
                    }
                  }
                }
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "movie"
            ]
          },
          "post": {
            "operationId": "MovieController_save",
            "parameters": [],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MovieDto"
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Create an instance of Movie and return it",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Movie"
                    }
                  }
                }
              },
              "401": {
                "description": "Unauthorized, invalid or missing token"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "movie"
            ],
            "security": [
              {
                "bearer": []
              }
            ]
          }
        },
        "/movie/{id}": {
          "get": {
            "operationId": "MovieController_findByIdAndJoinGenre",
            "parameters": [
              {
                "name": "id",
                "required": true,
                "in": "path",
                "example": "9d8228e3-3425-4c95-b78e-49cb7d0d7f32",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Return a Movie according to the id",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Movie"
                    }
                  }
                }
              },
              "400": {
                "description": "Invalid UUID"
              },
              "404": {
                "description": "Not found"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "movie"
            ]
          },
          "put": {
            "operationId": "MovieController_update",
            "parameters": [
              {
                "name": "id",
                "required": true,
                "in": "path",
                "example": "db71c7f5-97fe-49fc-80f9-b35da182de37",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/MovieDto"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Update an instance of Movie according to the id and return it",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Movie"
                    }
                  }
                }
              },
              "400": {
                "description": "Invalid UUID"
              },
              "404": {
                "description": "Not found"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "movie"
            ],
            "security": [
              {
                "bearer": []
              }
            ]
          },
          "delete": {
            "operationId": "MovieController_delete",
            "parameters": [
              {
                "name": "id",
                "required": true,
                "in": "path",
                "example": "f1e33a52-ca9b-42ec-a788-b3d926d83014",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Delete an instance of Movie according to the id"
              },
              "400": {
                "description": "Invalid UUID"
              },
              "404": {
                "description": "Not found"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "movie"
            ],
            "security": [
              {
                "bearer": []
              }
            ]
          }
        },
        "/genre": {
          "get": {
            "operationId": "GenreController_findAllAndJoinMovie",
            "parameters": [],
            "responses": {
              "200": {
                "description": "Return the list of Genres",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/Genre"
                      }
                    }
                  }
                }
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "genre"
            ]
          },
          "post": {
            "operationId": "GenreController_save",
            "summary": "Require admin role",
            "parameters": [],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GenreDto"
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "Create an instance of Genre and return it",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Genre"
                    }
                  }
                }
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "genre"
            ],
            "security": [
              {
                "bearer": []
              }
            ]
          }
        },
        "/genre/{id}": {
          "get": {
            "operationId": "GenreController_findByIdAndJoinMovie",
            "parameters": [
              {
                "name": "id",
                "required": true,
                "in": "path",
                "example": "d724428e-73e6-450d-9110-74b0fdd633ba",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Return a Genre according to the id",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Genre"
                    }
                  }
                }
              },
              "400": {
                "description": "Invalid UUID"
              },
              "404": {
                "description": "Not found"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "genre"
            ]
          },
          "put": {
            "operationId": "GenreController_update",
            "summary": "Require admin role",
            "parameters": [
              {
                "name": "id",
                "required": true,
                "in": "path",
                "example": "b1ca11c7-2bb5-4c83-9d3d-d4c2aa30732b",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GenreDto"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Update an instance of Genre according to the id and return it",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Genre"
                    }
                  }
                }
              },
              "400": {
                "description": "Invalid UUID"
              },
              "404": {
                "description": "Not found"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "genre"
            ],
            "security": [
              {
                "bearer": []
              }
            ]
          },
          "delete": {
            "operationId": "GenreController_delete",
            "summary": "Require admin role",
            "parameters": [
              {
                "name": "id",
                "required": true,
                "in": "path",
                "example": "47669149-0aa8-4403-8f73-a62f388b283d",
                "schema": {
                  "type": "string"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Delete an instance of Genre according to the id"
              },
              "400": {
                "description": "Invalid UUID"
              },
              "404": {
                "description": "Not found"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "genre"
            ],
            "security": [
              {
                "bearer": []
              }
            ]
          }
        },
        "/user/register": {
          "post": {
            "operationId": "UserController_register",
            "parameters": [],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserDto"
                  }
                }
              }
            },
            "responses": {
              "201": {
                "description": "User successfully created"
              },
              "409": {
                "description": "Conflict: Username already exists"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "user"
            ]
          }
        },
        "/auth/login": {
          "post": {
            "operationId": "AuthController_login",
            "parameters": [],
            "requestBody": {
              "required": true,
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/AuthDto"
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Authenticated",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/TokenDto"
                    }
                  }
                }
              },
              "401": {
                "description": "Wrong credentials"
              },
              "default": {
                "description": "Unexpected error"
              }
            },
            "tags": [
              "auth"
            ]
          }
        }
      },
      "info": {
        "title": "Movies API",
        "description": "API to manage movies and genres. Swagger has been moved to this application because Vercel is not recognizing.<br>API URL: <a target='_blank' href='https://movies-restful-api.vercel.app/'>https://movies-restful-api.vercel.app</a><br>Repository URL: <a target='_blank' href='https://github.com/sadmagrage/movies-restful-api'>https://github.com/sadmagrage/movies-restful-api</a>",
        "version": "1.0",
        "contact": {}
      },
      "tags": [],
      "servers": [{ url: "https://movies-restful-api.vercel.app" }],
      "components": {
        "securitySchemes": {
          "bearer": {
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "type": "http"
          }
        },
        "schemas": {
          "User": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "example": "e7cdc7c3-f15f-4ff9-bfde-0f9054834571"
              },
              "username": {
                "type": "string",
                "example": "JohnSummit"
              },
              "password": {
                "type": "string",
                "example": "$2a$12$czsdBnlRlyyvaeqymJgzN.bE55XE1NPVuc9aeCY5oX64FhyQMptW6"
              },
              "postedMovies": {
                "example": {
                  "id": "0e1bf34e-d682-4837-8f6a-cc79771e8cd4",
                  "name": "Up - Altas Aventuras",
                  "genres": [
                    {
                      "id": "9bd076b2-37e4-4a78-b46f-472c55de6528",
                      "name": "Horror"
                    }
                  ],
                  "image": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg",
                  "synopsis": "Carl Fredricksen (Edward Asner) é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. O terreno onde a casa fica localizada interessa a um empresário, que deseja construir no local um edifício. Após um incidente em que acerta um homem com sua bengala, Carl é considerado uma ameaça pública e forçado a ser internado em um asilo. Para evitar que isto aconteça, ele enche milhares de balões em sua casa, fazendo com que ela levante vôo. O objetivo de Carl é viajar para uma floresta na América do Sul, um local onde ele e Ellie sempre desejaram morar. Só que, após o início da aventura, ele descobre que seu pior pesadelo embarcou junto: Russell (Jordan Nagai), um menino de 8 anos.",
                  "duration": "5700",
                  "release": "2009-09-04",
                  "rating": 4.6
                },
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "role": {
                "type": "string",
                "example": "user"
              }
            },
            "required": [
              "id",
              "username",
              "password",
              "postedMovies",
              "role"
            ]
          },
          "Movie": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "example": "9e2db47f-7b94-4e54-9590-257ef239e51a"
              },
              "name": {
                "type": "string",
                "example": "Up - Altas Aventuras"
              },
              "genres": {
                "example": [
                  {
                    "id": "69e57cf8-52a8-47c7-8522-1bf32ee12d30",
                    "name": "Horror"
                  }
                ],
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "image": {
                "type": "string",
                "example": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg"
              },
              "synopsis": {
                "type": "string",
                "example": "Carl Fredricksen (Edward Asner) é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. O terreno onde a casa fica localizada interessa a um empresário, que deseja construir no local um edifício. Após um incidente em que acerta um homem com sua bengala, Carl é considerado uma ameaça pública e forçado a ser internado em um asilo. Para evitar que isto aconteça, ele enche milhares de balões em sua casa, fazendo com que ela levante vôo. O objetivo de Carl é viajar para uma floresta na América do Sul, um local onde ele e Ellie sempre desejaram morar. Só que, após o início da aventura, ele descobre que seu pior pesadelo embarcou junto: Russell (Jordan Nagai), um menino de 8 anos."
              },
              "duration": {
                "type": "string",
                "example": "5700"
              },
              "release": {
                "type": "string",
                "example": "2009-09-04"
              },
              "rating": {
                "type": "number",
                "example": 4.6
              },
              "postAuthor": {
                "example": {
                  "username": "JohnSummit"
                },
                "allOf": [
                  {
                    "$ref": "#/components/schemas/User"
                  }
                ]
              }
            },
            "required": [
              "id",
              "name",
              "genres",
              "image",
              "synopsis",
              "duration",
              "release",
              "rating",
              "postAuthor"
            ]
          },
          "DurationDto": {
            "type": "object",
            "properties": {}
          },
          "MovieDto": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "example": "Up - Altas Aventuras"
              },
              "genres": {
                "example": [
                  "bc04ed3f-8a86-4e0b-b9e8-886424c82ec3"
                ],
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "image": {
                "type": "string",
                "example": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg"
              },
              "synopsis": {
                "type": "string",
                "example": "Carl Fredricksen (Edward Asner) é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa, a falecida Ellie. O terreno onde a casa fica localizada interessa a um empresário, que deseja construir no local um edifício. Após um incidente em que acerta um homem com sua bengala, Carl é considerado uma ameaça pública e forçado a ser internado em um asilo. Para evitar que isto aconteça, ele enche milhares de balões em sua casa, fazendo com que ela levante vôo. O objetivo de Carl é viajar para uma floresta na América do Sul, um local onde ele e Ellie sempre desejaram morar. Só que, após o início da aventura, ele descobre que seu pior pesadelo embarcou junto: Russell (Jordan Nagai), um menino de 8 anos."
              },
              "duration": {
                "example": {
                  "hours": 1,
                  "minutes": 35
                },
                "allOf": [
                  {
                    "$ref": "#/components/schemas/DurationDto"
                  }
                ]
              },
              "release": {
                "type": "string",
                "example": "2009-09-04"
              },
              "rating": {
                "type": "number",
                "example": 4.6
              }
            },
            "required": [
              "name",
              "genres",
              "image",
              "synopsis",
              "duration",
              "release",
              "rating"
            ]
          },
          "Genre": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "example": "26eb5a00-6268-40ba-8c45-b7cd4b8d34d5"
              },
              "name": {
                "type": "string",
                "example": "Horror"
              },
              "movies": {
                "example": [
                  {
                    "id": "f292174d-5266-4f9b-b2c8-cad062070831",
                    "name": "Up - Altas Aventuras",
                    "image": "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg"
                  }
                ],
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "required": [
              "id",
              "name",
              "movies"
            ]
          },
          "GenreDto": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "example": "Horror"
              }
            },
            "required": [
              "name"
            ]
          },
          "UserDto": {
            "type": "object",
            "properties": {
              "username": {
                "type": "string",
                "example": "JohnSummit"
              },
              "password": {
                "type": "string",
                "example": "password123"
              }
            },
            "required": [
              "username",
              "password"
            ]
          },
          "AuthDto": {
            "type": "object",
            "properties": {
              "username": {
                "type": "string",
                "example": "JohnSummit"
              },
              "password": {
                "type": "string",
                "example": "password123"
              }
            },
            "required": [
              "username",
              "password"
            ]
          },
          "TokenDto": {
            "type": "object",
            "properties": {
              "token": {
                "type": "string",
                "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
              }
            },
            "required": [
              "token"
            ]
          }
        }
      }
    },
    "customOptions": {}
  };
    url = options.swaggerUrl || url
    let urls = options.swaggerUrls
    let customOptions = options.customOptions
    let spec1 = options.swaggerDoc
    let swaggerOptions = {
      spec: spec1,
      url: url,
      urls: urls,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    }
    for (let attrname in customOptions) {
      swaggerOptions[attrname] = customOptions[attrname];
    }
    let ui = SwaggerUIBundle(swaggerOptions)
  
    if (customOptions.initOAuth) {
      ui.initOAuth(customOptions.initOAuth)
    }
  
    if (customOptions.authAction) {
      ui.authActions.authorize(customOptions.authAction)
    }
    
    window.ui = ui
  }
  