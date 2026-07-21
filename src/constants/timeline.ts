export interface TimelineItem {
    id: number;
    year: string;
    title: string;
    description: string;
    color: "designer" | "developer";
}

export const timeline: TimelineItem[] = [
    {
  id: 1,
  year: "2010",
  title: "Designer Gráfico",
  description:
    "Início da minha trajetória profissional, criando identidades visuais, materiais gráficos e peças de comunicação para empresas.",
  color: "designer",
},
{
  id: 2,
  year: "2014",
  title: "Empreendedor",
  description:
    "Fundação da minha primeira empresa, onde desenvolvi experiência em gestão, marketing, atendimento e visão de negócio.",
  color: "designer",
},
{
  id: 3,
  year: "2020",
  title: "UI Design",
  description:
    "Passei a explorar o universo digital, aprofundando meus conhecimentos em interfaces, design de produtos e experiência do usuário.",
  color: "designer",
},
{
  id: 4,
  year: "2024",
  title: "Transição para Tecnologia",
  description:
    "Ingresso na graduação em Análise e Desenvolvimento de Sistemas, fortalecendo minha base em lógica, programação e desenvolvimento de software.",
  color: "developer",
},
{
  id: 5,
  year: "2025",
  title: "Desenvolvedor Web",
  description:
    "Início da formação em desenvolvimento web pela Dev em Dobro, aprofundando conhecimentos em tecnologias modernas e boas práticas de desenvolvimento.",
  color: "developer",
},
{
  id: 6,
  year: "2026",
  title: "Desenvolvedor",
  description:
    "Entrega do meu primeiro projeto completo para um cliente, colocando em prática meus conhecimentos em React, TypeScript e Supabase.",
  color: "developer",
},
];