import ListLegendariesService from "../../services/legendary/ListLegendariesService";

export default class ListLegendaryByNameController {
  constructor() {
    this.service = new ListLegendariesService();
  }

  index(request, response) {
    const legendaries = this.service.listAll();
    response.json(legendaries);
  }

  show(request, response) {
    const { name } = request.query;

    if (!name) {
      return response
        .status(400)
        .json({ erro: "Você não passou o nome do pokemon" });
    }

    const legendary = this.service.listOne(name);

    return response.json(legendary);
  }
}
