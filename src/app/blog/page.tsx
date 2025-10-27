'use client'

import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Como Desenvolver Consciência Corporal em 30 Dias",
    excerpt: "Descubra técnicas simples e eficazes para reconectar-se com seu corpo e melhorar sua qualidade de vida através da consciência corporal.",
    author: "Dr. Ana Silva",
    date: "15/01/2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    category: "Bem-estar"
  },
  {
    id: 2,
    title: "5 Exercícios de Respiração para Reduzir o Estresse",
    excerpt: "Aprenda técnicas de respiração baseadas em evidências científicas que podem transformar sua relação com o estresse diário.",
    author: "Prof. Carlos Mendes",
    date: "12/01/2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Técnicas"
  },
  {
    id: 3,
    title: "A Ciência por Trás da Conexão Mente-Corpo",
    excerpt: "Explore as descobertas mais recentes da neurociência sobre como nossa mente e corpo trabalham em harmonia para nossa saúde.",
    author: "Dra. Marina Costa",
    date: "10/01/2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    category: "Ciência"
  },
  {
    id: 4,
    title: "Meditação em Movimento: Yoga e Consciência",
    excerpt: "Descubra como a prática de yoga pode ser uma ferramenta poderosa para desenvolver maior consciência corporal e mental.",
    author: "Instrutora Lucia Fernandes",
    date: "08/01/2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    category: "Prática"
  },
  {
    id: 5,
    title: "Alimentação Consciente: Nutrindo Corpo e Mente",
    excerpt: "Aprenda como a alimentação consciente pode transformar sua relação com a comida e melhorar sua saúde integral.",
    author: "Nutricionista João Santos",
    date: "05/01/2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    category: "Nutrição"
  },
  {
    id: 6,
    title: "Técnicas de Relaxamento para o Dia a Dia",
    excerpt: "Métodos práticos e rápidos para incorporar momentos de relaxamento profundo em sua rotina diária, mesmo com pouco tempo.",
    author: "Terapeuta Rosa Lima",
    date: "03/01/2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Relaxamento"
  }
]

const categories = ["Todos", "Bem-estar", "Técnicas", "Ciência", "Prática", "Nutrição", "Relaxamento"]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog Corpo Consciente
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra insights, técnicas e conhecimentos para desenvolver uma conexão mais profunda 
              entre sua mente e corpo através de artigos escritos por especialistas.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-indigo-600 font-medium group-hover:gap-3 transition-all">
                    <span>Ler mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Receba Novos Artigos por Email
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Seja o primeiro a receber nossos insights sobre consciência corporal e bem-estar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-4 focus:ring-indigo-300 outline-none"
            />
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}