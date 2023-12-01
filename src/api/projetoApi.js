import { gql } from "@apollo/client";

export const PROJETOS_QUERY = gql`
  query {
    allProjetos {
      id
      capa {
        url
      }
      titulo
      descricao
      fotos {
        url
      }
      videos {
        url
      }
    }
  }
`;

export const SOBRE_MIM_QUERY = gql`
  query {
    allSobres {
      id
      foto {
        url
      }
      descricao
    }
  }
`;
