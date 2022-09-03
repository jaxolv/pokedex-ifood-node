import LegendaryModel from "../../models/legendary/LegendaryModel"

export default class DeleteLegendaryService {
  constructor() {}

  async delete(id) {
    try {
      const pokemon = await LegendaryModel.findByPk(id);

      if (!pokemon) {
        return { mensagem: "Pokémon não encontrado"}
      }
      // DROP * FROM legendaries WHERE id = '2' (por exemplo);
      const deletedPokemon = await pokemon.destroy();

      return deletedPokemon

      /* const deletedPokemon = await LegendaryModel.destroy({ where: { id }});
      console.log(deletedPokemon) */

    } catch (error) {
      console.log(error)
      return { error: error.message }
    }
  }
}
