

import type { Project } from "../../../types/types";
import mineiro from "..//..//..//assets/images/foto-developerproject.webp";
import seo from "..//..//..//assets/images/seo-project.webp"
import marcas from "..//..//..//assets/images/branding-project.webp";
import portfolio from "..//..//..//assets/images/portfolio-project.webp"
import mkp from "..//..//..//assets/images/mkp-project.webp"
import social from "..//..//..//assets/images/social-project.webp"
import mineiro1 from "..//..//..//assets/images/mineiro1.webp"
import mineiro2 from "..//..//..//assets/images/mineiro2.webp"
import mineiro3 from "..//..//..//assets/images/mineiro3.webp"
import mineiro4 from "..//..//..//assets/images/mineiro4.webp"
import mkp1 from "..//..//..//assets/images/mkp1.webp"
import mkp2 from "..//..//..//assets/images/mkp2.webp"
import mkp3 from "..//..//..//assets/images/mkp3.webp"
import mkp4 from "..//..//..//assets/images/mkp4.webp"
import marcas1 from "..//..//..//assets/images/marcas1.webp"
import marcas2 from "..//..//..//assets/images/marcas2.webp"
import marcas3 from "..//..//..//assets/images/marcas3.webp"
import marcas4 from "..//..//..//assets/images/marcas4.webp"
import seo1 from "..//..//..//assets/images/seo1.webp"
import seo2 from "..//..//..//assets/images/seo2.webp"
import seo3 from "..//..//..//assets/images/seo3.webp"
import seo4 from "..//..//..//assets/images/seo4.webp"
import social1 from "..//..//..//assets/images/social1.webp"
import social2 from "..//..//..//assets/images/social2.webp"
import social3 from "..//..//..//assets/images/social3.webp"
import social4 from "..//..//..//assets/images/social4.webp"
import portfolio1 from "..//..//..//assets/images/portfolio1.webp"
import portfolio2 from "..//..//..//assets/images/portfolio2.webp"
import portfolio3 from "..//..//..//assets/images/portfolio3.webp"
import portfolio4 from "..//..//..//assets/images/portfolio4.webp"

export const projects: Project[] = [

    {
        id: 1,
        order: 1,
        animation: "slideLeft",

        title: "Sistema de pedidos",

        description: "Sistema completo de pedidos online com painel administrativo e integração ao WhatsApp.",

        subtitle: "Sistema completo para pedidos online.",

        longDescription:
            "Plataforma para hamburgueria, com cardápio digital, carrinho de compras, painel administrativo, integração com WhatsApp, impressão de pedidos, otimização para pesquisas no Google e configuração de domínio personalizado.",

        image: mineiro,

        gallery: [
            mineiro1,
            mineiro2,
            mineiro3,
            mineiro4
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
            "Painel de pedidos"
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

        demo: "mineiroloja.com.br",

        nextProjectId: 2
    },

    {
        id: 2,
        order: 2,
        animation: "fadeUp",

        title: "Gestão de Marketplaces",

        description: "Criação e operação de lojas virtuais em marketplaces.",

        subtitle: "Criação e gestão de lojas em marketplaces.",

        longDescription:
            "Serviço voltado para criação, organização e operação de lojas virtuais em marketplaces, com gestão de produtos, cadastro e otimização de anúncios, organização do catálogo e acompanhamento da operação.",

        image: mkp,

        gallery: [
            mkp1,
            mkp2,
            mkp3,
            mkp4
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
            "Gestão e otimização de anúncios",
            "Títulos estratégicos",
            "Operação de lojas virtuais"
        ],

        highlights: [
            {
                title: "Gestão de Produtos",
                description: "Cadastro e organização estratégica dos produtos da loja.",
                icon: "package"
            },
            {
                title: "E-commerce",
                description: "Estruturação e operação de lojas virtuais.",
                icon: "shopping-bag"
            },
            {
                title: "Gestão de Anúncios",
                description: "Criação e otimização de anúncios para maior relevância nas pesquisas.",
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
        order: 3,
        animation: "slideLeft",

        title: "Portfólio Pessoal",

        description: "Portfólio responsivo desenvolvido para apresentar meus projetos, habilidades e experiência de forma moderna e intuitiva.",

        subtitle: "Portfólio moderno para apresentação profissional.",

        longDescription:
            "Projeto desenvolvido para apresentar minha trajetória profissional, habilidades, experiências e principais projetos, unindo desenvolvimento web, design e uma experiência de navegação moderna e responsiva.",

        image: portfolio,

        gallery: [
            portfolio1,
            portfolio2,
            portfolio3,
            portfolio4
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
        order: 4,
        animation: "slideLeft",

        title: "Pesquisa e Otimização",

        description: "Planejamento, otimização e gestão de canais digitais para fortalecer marcas e gerar resultados.",

        subtitle: "Estratégias baseadas em pesquisa e dados.",

        longDescription:
            "Pesquisa e análise de informações para identificar oportunidades, compreender comportamentos e orientar estratégias digitais com base em dados e resultados.",

        image: seo,

        gallery: [
            seo2,
            seo3,
            seo1,
            seo4
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
                description: "Otimização de termos para melhorar a visibilidade nas buscas.",
                icon: "search"
            },
            {
                title: "Analytics",
                description: "Análise de dados e métricas para compreender resultados e identificar oportunidades.",
                icon: "bar-chart"
            },
            {
                title: "Google e Meta",
                description: "Análises para orientar estratégias nas principais plataformas digitais.",
                icon: "globe"
            },
            {
                title: "Pesquisa",
                description: "Análise de dados para identificar oportunidades estratégicas",
                icon: "share-2"
            }
        ],

        github: "",

        demo: "",

        nextProjectId: 5
    },

    {
        id: 5,
        order: 5,
        animation: "slideLeft",

        title: "Design de marca",

        description: "Criação de marca do zero, desenvolvendo sua identidade visual e personalidade.",

        subtitle: "Identidade visual criada do zero.",

        longDescription:
            "Projeto de criação de marca desenvolvido desde o conceito inicial, passando pela construção da identidade visual, definição de elementos gráficos e criação de uma linguagem visual consistente para representar a empresa.",

        image: marcas,

        gallery: [
            marcas1,
            marcas2,
            marcas3,
            marcas4
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
        order: 6,
        animation: "slideLeft",

        title: "Social Media",

        description: "Criação de conteúdos estratégicos, artes e campanhas para fortalecer a presença da marca nas redes sociais.",

        subtitle: "Conteúdo estratégico para redes sociais.",

        longDescription:
            "Desenvolvimento de conteúdos e estratégias para redes sociais, roteiros, fotos, vídeos e campanhas alinhados à identidade da marca para fortalecer sua presença digital e gerar conexão com o público.",

        image: social,

        gallery: [
            social1,
            social2,
            social3,
            social4
        ],

        category: "designer",

        size: "medium",

        technologies: [
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
                title: "Redes Sociais",
                description: "Criação de conteúdos visuais para fortalecer a presença da marca.",
                icon: "facebook"
            },
            {
                title: "Foto e Vídeo",
                description: "Produção de fotos e vídeos para comunicar e valorizar a marca.",
                icon: "instagram"
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