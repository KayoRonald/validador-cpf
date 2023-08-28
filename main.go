package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/handlebars/v2"
)

func main() {
	// Create a new engine
	engine := handlebars.New("./views", ".hbs")

	// Or from an embedded system
	// See github.com/gofiber/embed for examples
	// engine := html.NewFileSystem(http.Dir("./views", ".hbs"))

	// Pass the engine to the Views
	app := fiber.New(fiber.Config{
		Views: engine,
	})

	app.Get("/", func(c *fiber.Ctx) error {
		// Render index
		return c.Render("teste", fiber.Map{
			"Title": "Validar CPF",
		}, "layouts/index")
	})
	app.Get("/oi", func(c *fiber.Ctx) error {
		// Render index
		return c.Render("error", fiber.Map{
			"Title": "Validar CPF",
		}, "layouts/index")
	})

	// app.All("*", func(c *fiber.Ctx) error {
	// 	// Render index within layouts/main
	// 	return c.Render("error", fiber.Map{
	// 		"Title": "Página não encontrada",
	// 	}, "layouts/index")
	// })

	log.Fatal(app.Listen(":3000"))
}
