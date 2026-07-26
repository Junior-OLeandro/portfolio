

import type { Project } from "../../../types/types";
import mineiro from "..//..//..//assets/images/foto-developerproject.webp";
import seo from "..//..//..//assets/images/seo-project.webp"
import marcas from "..//..//..//assets/images/branding-project.webp";
import portfolio from "..//..//..//assets/images/portfolio-project.webp"
import mkp from "..//..//..//assets/images/mkp-project.webp"
import social from "..//..//..//assets/images/social-project.webp"

export const projects: Project[] = [

    {
        id: 1,

        title: "Sistema de pedidos",

        description: "Sistema completo de pedidos online com painel administrativo e integração ao WhatsApp.",

        subtitle: "Sistema completo para pedidos online.",

        longDescription:
            "Plataforma completa para hamburguerias com cardápio digital, carrinho de compras, painel administrativo, integração com WhatsApp e impressão automática de pedidos.",

        image: mineiro,

        gallery: [
            mineiro,
            mineiro,
            mineiro,
            mineiro
        ],

        category: "developer",

        size: "large",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Supabase"
        ],

        features: [
            "Cardápio online categorizado",
            "Carrinho de compras dinâmico",
            "Taxa de entrega por bairro",
            "Tempo de entrega configurável",
            "Histórico de pedidos",
            "Status do pedido em tempo real"
        ],

        highlights: [
            {
                title: "Carrinho Online",
                description: "Adição de itens e cálculo automático.",
                icon: "shopping-cart"
            },
            {
                title: "Painel Administrativo",
                description: "Gerenciamento de pedidos em tempo real.",
                icon: "monitor"
            },
            {
                title: "Integração WhatsApp",
                description: "Envio automático do pedido para o WhatsApp.",
                icon: "message-circle"
            },
            {
                title: "Impressão Térmica",
                description: "Impressão automática para cozinha.",
                icon: "printer"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 2
    },

    {
        id: 2,

        title: "Gestão de Marketplaces",

        description: "Criação e operação de lojas virtuais em marketplaces.",

        subtitle: "Criação e gestão de lojas em marketplaces.",

        longDescription:
            "Serviço voltado para criação, organização e operação de lojas virtuais em marketplaces, com gestão de produtos, cadastro de anúncios, organização do catálogo e acompanhamento da operação.",

        image: mkp,

        gallery: [
            mkp,
            mkp,
            mkp,
            mkp
        ],

        category: "developer",

        size: "medium",

        technologies: [
            "Gestão de Produtos",
            "E-commerce"
        ],

        features: [
            "Criação de lojas em marketplaces",
            "Cadastro e organização de produtos",
            "Gestão de anúncios",
            "Organização de catálogo",
            "Operação de lojas virtuais",
            "Gestão de produtos e informações"
        ],

        highlights: [
            {
                title: "Gestão de Produtos",
                description: "Cadastro e organização dos produtos da loja.",
                icon: "package"
            },
            {
                title: "E-commerce",
                description: "Estruturação e operação de lojas virtuais.",
                icon: "shopping-bag"
            },
            {
                title: "Gestão de Anúncios",
                description: "Organização e gerenciamento dos anúncios publicados.",
                icon: "megaphone"
            },
            {
                title: "Operação de Marketplace",
                description: "Acompanhamento da rotina e funcionamento da loja.",
                icon: "store"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 3
    },

    {
        id: 3,

        title: "Portfólio Pessoal",

        description: "Portfólio responsivo desenvolvido para apresentar meus projetos, habilidades e experiência de forma moderna e intuitiva.",

        subtitle: "Portfólio moderno para apresentação profissional.",

        longDescription:
            "Projeto desenvolvido para apresentar minha trajetória profissional, habilidades, experiências e principais projetos, unindo desenvolvimento web, design e uma experiência de navegação moderna e responsiva.",

        image: portfolio,

        gallery: [
            portfolio,
            portfolio,
            portfolio,
            portfolio
        ],

        category: "developer",

        size: "large",

        technologies: [
            "React",
            "TS",
            "Tailwind"
        ],

        features: [
            "Design responsivo",
            "Apresentação de projetos",
            "Seção de habilidades",
            "Experiência profissional",
            "Navegação intuitiva",
            "Interface moderna e interativa"
        ],

        highlights: [
            {
                title: "React",
                description: "Construção de uma interface moderna baseada em componentes.",
                icon: "code"
            },
            {
                title: "TypeScript",
                description: "Código mais seguro e organizado com tipagem estática.",
                icon: "file-code"
            },
            {
                title: "Tailwind CSS",
                description: "Estilização responsiva e criação de uma interface consistente.",
                icon: "palette"
            },
            {
                title: "Design Responsivo",
                description: "Experiência adaptada para diferentes tamanhos de tela.",
                icon: "monitor"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 4
    },

    {
        id: 4,

        title: "Marketing Digital",

        description: "Planejamento, otimização e gestão de canais digitais para fortalecer marcas e gerar resultados.",

        subtitle: "Estratégias digitais para fortalecer marcas.",

        longDescription:
            "Planejamento e gestão da presença digital de marcas, utilizando estratégias de SEO, análise de dados, ferramentas do Google, plataformas da Meta e produção de conteúdo para ampliar o alcance e fortalecer a presença online.",

        image: seo,

        gallery: [
            seo,
            seo,
            seo,
            seo
        ],

        category: "developer",

        size: "large",

        technologies: [
            "SEO",
            "Analytics",
            "Google",
            "Meta",
        ],

        features: [
            "Planejamento digital",
            "Otimização para mecanismos de busca",
            "Análise de dados e métricas",
            "Gestão de canais digitais",
            "Estratégias para Google e Meta",
        ],

        highlights: [
            {
                title: "SEO",
                description: "Otimização da presença digital melhorando a visibilidade nas buscas.",
                icon: "search"
            },
            {
                title: "Analytics",
                description: "Análise de dados para acompanhar resultados e identificar oportunidades.",
                icon: "bar-chart"
            },
            {
                title: "Google e Meta",
                description: "Gestão de estratégias e campanhas nas principais plataformas digitais.",
                icon: "globe"
            },
            {
                title: "Social Media",
                description: "Planejamento e gestão de conteúdos para fortalecer a presença nas redes sociais.",
                icon: "share-2"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 5
    },

    {
        id: 5,

        title: "Design de marca",

        description: "Criação de marca do zero, desenvolvendo sua identidade visual e personalidade.",

        subtitle: "Identidade visual criada do zero.",

        longDescription:
            "Projeto de criação de marca desenvolvido desde o conceito inicial, passando pela construção da identidade visual, definição de elementos gráficos e desenvolvimento de uma personalidade visual consistente para representar a empresa.",

        image: marcas,

        gallery: [
            marcas,
            marcas,
            marcas,
            marcas
        ],

        category: "designer",

        size: "medium",

        technologies: [
            "Design de Marca",
            "Vetorização",
            "Branding"
        ],

        features: [
            "Criação de marca do zero",
            "Desenvolvimento de identidade visual",
            "Criação de elementos gráficos",
            "Vetorização da marca",
            "Definição de personalidade visual",
            "Construção de identidade consistente"
        ],

        highlights: [
            {
                title: "Identidade Visual",
                description: "Criação de uma identidade visual única e alinhada à marca.",
                icon: "palette"
            },
            {
                title: "Design de Marca",
                description: "Desenvolvimento visual da marca desde o conceito inicial.",
                icon: "pen-tool"
            },
            {
                title: "Vetorização",
                description: "Construção da marca em formato vetorial para diferentes aplicações.",
                icon: "layers"
            },
            {
                title: "Branding",
                description: "Construção de uma personalidade visual consistente para a marca.",
                icon: "sparkles"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 6
    },

    {
        id: 6,

        title: "Social Media",

        description: "Criação de conteúdos estratégicos, artes e campanhas para fortalecer a presença da marca nas redes sociais.",

        subtitle: "Conteúdo estratégico para redes sociais.",

        longDescription:
            "Desenvolvimento de conteúdos visuais e estratégias para redes sociais, criando artes, campanhas e materiais alinhados à identidade da marca para fortalecer sua presença digital e gerar conexão com o público.",

        image: social,

        gallery: [
            social,
            social,
            social,
            social
        ],

        category: "designer",

        size: "medium",

        technologies: [
            "Instagram",
            "Facebook",
            "Conteúdo",
            "Design"
        ],

        features: [
            "Criação de conteúdo para redes sociais",
            "Desenvolvimento de artes",
            "Planejamento de conteúdo",
            "Criação de campanhas",
            "Identidade visual para redes sociais",
            "Fortalecimento da presença digital"
        ],

        highlights: [
            {
                title: "Instagram",
                description: "Criação de conteúdos visuais para fortalecer a presença da marca.",
                icon: "instagram"
            },
            {
                title: "Facebook",
                description: "Desenvolvimento de materiais para comunicação e divulgação.",
                icon: "facebook"
            },
            {
                title: "Conteúdo",
                description: "Planejamento e criação de conteúdos estratégicos para o público.",
                icon: "file-text"
            },
            {
                title: "Design",
                description: "Desenvolvimento de peças visuais alinhadas à identidade da marca.",
                icon: "palette"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 1
    }

];