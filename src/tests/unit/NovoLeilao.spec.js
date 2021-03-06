import NovoLeilao from "@/views/NovoLeilao"
import { mount } from "@vue/test-utils"
import { createLeilao } from "@/http"

jest.mock("@/http")

const $router = {
  push: jest.fn()
} //Simulador de router

describe("um novo leilao deve ser criado", () => {
  test("dado o formularip preenchido, um leilao deve ser criado", () => {

    createLeilao.mockResolvedValueOnce()

    const wrapper = mount(NovoLeilao, {
      mocks: {
        $router
      }
    })

    wrapper.find(".produto").setValue("Um livro da casa do código")
    wrapper.find(".descricao").setValue("Conteúdo de primeira")
    wrapper.find(".valor").setValue(50)

    wrapper.find("form").trigger("submit")

    expect(createLeilao).toHaveBeenCalled() //Espera que o createLeilao foi chamado uma vez

  })
})
