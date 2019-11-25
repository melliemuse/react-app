import AnimalManager from "./AnimalManager"
   
   
   export const deleteAnimal = (id) => {
        AnimalManager.delete(id)
          .then(() => {
            AnimalManager.getAll()
              .then((newAnimals) => {
                this.setState({
                  animals: newAnimals
                })
              })
          })
              }

