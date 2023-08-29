package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/handlebars/v2"
)

func main() {
	engine := handlebars.New("./views", ".hbs")
	app := fiber.New(fiber.Config{
		Views: engine,
	})
  app.Static("/static", "./static")
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("validatecpf", fiber.Map{
			"Title": "Validar CPF",
		}, "layouts/index")
	})
  app.Use(func(c *fiber.Ctx) error {
		return c.Render("error", fiber.Map{
			"Title": "Página não encontrada",
		}, "layouts/index")
	})
	port := os.Getenv("port")
	if port == "" {
		log.Print("Environment specified PORT, '3000' otherwise")
		port = "8080"
	}
	app.Listen(":" + port)
}
