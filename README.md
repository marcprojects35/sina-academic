# SINA - Sistema Inteligente de Notas Acadêmicas

## 📋 Descrição

O SINA é um sistema de monitoramento acadêmico inteligente que permite aos professores gerenciar notas, frequência e acompanhar o desempenho dos estudantes de forma eficiente.

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação
- Login com credenciais configuráveis
- Credenciais definidas em `src/contexts/AuthContext.jsx`
- Sistema de sessão persistente

### 📊 Dashboard Principal
- **Formulário de Adição de Registros**: Adicione notas e frequência para estudantes
- **Tabela de Dados**: Visualize todos os registros acadêmicos
- **Gráficos Estatísticos**: 
  - Média da turma
  - Taxa de frequência
  - Distribuição de notas
  - Desempenho por disciplina
  - Estudantes em risco

### 👥 Base de Dados Estática
#### Estudantes (15 alunos)
- Ana Beatriz Silva (5A)
- João Pedro Almeida (5A)
- Larissa Santos Oliveira (5A)
- Rafael Gomes Ferreira (5B)
- Vitória Costa Mendes (5B)
- Lucas Henrique Souza (5B)
- Camila Rocha Martins (5C)
- Matheus Carvalho Lima (5C)
- Gabriela Nunes Pereira (5C)
- Bruno Alves Monteiro (5A)
- Isabela Fernandes Duarte (5B)
- Thiago Moreira Lopes (5C)
- Mariana Araújo Castro (5A)
- Felipe Ramos Correia (5B)
- Júlia Mendes Barros (5C)

#### Disciplinas (13 matérias)
**Linguagens e suas Tecnologias:**
- Língua Portuguesa
- Literatura
- Arte
- Educação Física
- Língua Inglesa

**Matemática e suas Tecnologias:**
- Matemática

**Ciências da Natureza e suas Tecnologias:**
- Biologia
- Física
- Química

**Ciências Humanas e Sociais Aplicadas:**
- História
- Geografia
- Filosofia
- Sociologia

### 🌐 Suporte a Idiomas
- **Português** (padrão)
- **Inglês**
- Toggle de idioma na interface

### 🎨 Temas
- **Tema Claro**: Interface clara com tons azuis e brancos
- **Tema Escuro**: Interface escura para melhor experiência noturna
- Toggle de tema na interface

### ⏰ Funcionalidades Adicionais
- **Relógio em Tempo Real**: Exibido no cabeçalho
- **Persistência de Dados**: Dados salvos no localStorage do navegador
- **Responsivo**: Funciona em dispositivos móveis e desktop

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 18.0.0
- npm >= 8.0.0

### Instalação
1. Navegue para o diretório do projeto:
   ```bash
   cd Frontend/sina_dashboard
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

### Build para Produção
```bash
npm run build
```

## 📱 Como Usar

### 1. Login
- Use as credenciais configuradas em `src/contexts/AuthContext.jsx`
- Clique em "Entrar no Sistema"

### 2. Adicionar Registro
- Clique em "Adicionar Nota"
- Selecione o estudante
- Selecione a disciplina
- Digite a nota (0-10)
- Digite a frequência (0-100%)
- Selecione o tipo de avaliação
- Clique em "Enviar"

### 3. Gerenciar Registros
- **Editar**: Clique no ícone de edição (lápis)
- **Excluir**: Clique no ícone de exclusão (lixeira)
- **Visualizar**: Todos os dados são exibidos na tabela

### 4. Análise de Dados
- **KPIs**: Visualize métricas principais no topo
- **Gráficos**: Analise distribuição de notas e desempenho por disciplina
- **Alertas**: Identifique estudantes em risco

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Roteamento**: React Router DOM
- **Build Tool**: Vite
- **Estado**: Context API (React Hooks)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Dashboard.jsx   # Dashboard principal
│   ├── StatisticsChart.jsx # Gráficos estatísticos
│   └── ui/             # Componentes de interface
├── contexts/            # Contextos React
│   ├── AuthContext.jsx # Autenticação
│   ├── DataContext.jsx # Dados estáticos
│   ├── LanguageContext.jsx # Internacionalização
│   └── ThemeContext.jsx # Temas
├── pages/               # Páginas da aplicação
└── Routes.jsx           # Configuração de rotas
```

## 🔧 Personalização

### Adicionar Novos Estudantes
Edite o arquivo `src/contexts/DataContext.jsx` e adicione novos estudantes no array `initialStudents`.

### Adicionar Novas Disciplinas
Edite o arquivo `src/contexts/DataContext.jsx` e adicione novas disciplinas no array `initialSubjects`.

### Alterar Credenciais
As credenciais padrão estão definidas em `src/contexts/AuthContext.jsx`.

## 📊 Dados de Exemplo

O sistema vem com dados de exemplo pré-carregados:
- 15 estudantes distribuídos em 3 turmas (5A, 5B, 5C)
- 13 disciplinas organizadas por áreas do conhecimento
- Notas e frequência geradas aleatoriamente para demonstração

## 🚨 Limitações

- **Dados Estáticos**: Não há backend, todos os dados são armazenados no localStorage
- **Persistência**: Dados são perdidos ao limpar o cache do navegador
- **Usuários Únicos**: Apenas um usuário pode estar logado por vez

## 🔮 Próximos Passos

- [ ] Implementar backend com banco de dados
- [ ] Sistema de múltiplos usuários
- [ ] Relatórios em PDF
- [ ] Notificações em tempo real
- [ ] API para integração com outros sistemas

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação ou entre em contato com a equipe de desenvolvimento.

---

**SINA** - Transformando a educação através da tecnologia 🎓✨
