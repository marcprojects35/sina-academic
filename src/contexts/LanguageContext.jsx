import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pt: {
    // Login
    'login': 'Entrar',
    'logout': 'Sair',
    'username': 'Nome de usuário',
    'password': 'Senha',
    'login-title': 'Login do Professor',
    'login-subtitle': 'Acesse o Sistema SINA',
    'login-button': 'Entrar no Sistema',
    'login-error': 'Usuário ou senha inválidos',
    'login-required': 'É necessário fazer login para acessar esta página',
    'remember-me': 'Lembrar de mim',
    'forgot-password': 'Esqueci minha senha',
    'welcome-back': 'Bem-vindo de volta',
    'professor': 'Professor',
    
    // Student Management
    'student-management': 'Gerenciar Estudantes',
    'add-student': 'Adicionar Estudante',
    'edit-student': 'Editar Estudante',
    'delete-student': 'Excluir Estudante',
    'student-name': 'Nome do Estudante',
    'student-id': 'ID do Estudante',
    'student-email': 'Email do Estudante',
    'student-class': 'Turma',
    'student-added': 'Estudante adicionado com sucesso',
    'student-updated': 'Estudante atualizado com sucesso',
    'student-deleted': 'Estudante excluído com sucesso',
    'confirm-delete-student': 'Tem certeza que deseja excluir este estudante?',
    'student-list': 'Lista de Estudantes',
    'no-students': 'Nenhum estudante encontrado',
    'search-students': 'Buscar estudantes...',
    
    // Grade Management
    'grade-management': 'Gerenciar Notas',
    'add-grade': 'Adicionar Nota',
    'edit-grade': 'Editar Nota',
    'delete-grade': 'Excluir Nota',
    'grade-value': 'Nota',
    'grade-subject': 'Disciplina',
    'grade-date': 'Data',
    'grade-type': 'Tipo de Avaliação',
    'grade-added': 'Nota adicionada com sucesso',
    'grade-updated': 'Nota atualizada com sucesso',
    'grade-deleted': 'Nota excluída com sucesso',
    'confirm-delete-grade': 'Tem certeza que deseja excluir esta nota?',
    'grade-list': 'Lista de Notas',
    'no-grades': 'Nenhuma nota encontrada',
    'student-grades': 'Notas do Estudante',
    'average-grade': 'Média',
    'grades': 'notas',
    'select-student': 'Selecionar estudante',
    'select-subject': 'Selecionar disciplina',
    
    // Subjects
    'portuguese-language': 'Língua Portuguesa',
    'english-language': 'Língua Inglesa',
    'arts': 'Arte',
    'physical-education': 'Educação Física',
    'mathematics': 'Matemática',
    'history': 'História',
    'geography': 'Geografia',
    'sociology': 'Sociologia',
    'philosophy': 'Filosofia',
    'physics': 'Física',
    'chemistry': 'Química',
    'biology': 'Biologia',
    
    // Grade Types
    'exam': 'Prova',
    'assignment': 'Trabalho',
    'quiz': 'Teste',
    'project': 'Projeto',
    'participation': 'Participação',
    
    // Header
    overview: 'Visão Geral',
    subjects: 'Disciplinas',
    attendance: 'Frequência',
    students: 'Estudantes',
    settings: 'Configurações',
    help: 'Ajuda',
    reports: 'Relatórios',
    more: 'Mais',
    dashboard: 'Painel',
    
    // Navigation descriptions
    'class-wide-performance-metrics': 'Métricas de desempenho da turma',
    'subject-specific-analytics': 'Análises específicas por disciplina',
    'attendance-tracking-patterns': 'Rastreamento e padrões de frequência',
    'individual-student-analytics': 'Análises individuais dos estudantes',
    
    // User info
    'grade-5-teacher': 'Professora do 5º Ano',
    
    // Main Dashboard
    'student-performance-overview': 'Visão Geral do Desempenho dos Estudantes',
    'monitor-academic-progress': 'Monitorar progresso acadêmico e identificar oportunidades de intervenção',
    'last-updated': 'Última atualização',
    'refresh': 'Atualizar',
    'auto': 'Automático',
    'manual': 'Manual',
    
    // KPI Cards
    'class-average-grade': 'Média da Turma',
    'across-all-subjects': 'Em todas as disciplinas',
    'attendance-rate': 'Taxa de Frequência',
    'current-month': 'Mês atual',
    'students-at-risk': 'Estudantes em Risco',
    'need-attention': 'Necessitam atenção',
    'grade-improvement': 'Melhoria das Notas',
    'students-improving': 'Estudantes melhorando',
    
    // Context Filters
    'context-filters': 'Filtros de Contexto',
    'class': 'Turma',
    'student-group': 'Grupo de Estudantes',
    'time-range': 'Período',
    'select-class': 'Selecionar turma...',
    'select-student-group': 'Selecionar grupo de estudantes...',
    'select-time-range': 'Selecionar período...',
    'active-students': 'Estudantes Ativos',
    'reset-filters': 'Limpar Filtros',
    
    // Class options
    'class-5a-28-students': 'Turma 5A (28 estudantes)',
    'class-5b-26-students': 'Turma 5B (26 estudantes)',
    'class-5c-24-students': 'Turma 5C (24 estudantes)',
    'all-classes-78-students': 'Todas as Turmas (78 estudantes)',
    'morning-session': 'Turno da manhã',
    'afternoon-session': 'Turno da tarde',
    'combined-view': 'Visão combinada',
    
    // Student groups
    'all-students': 'Todos os Estudantes',
    'at-risk-students': 'Estudantes em Risco (8)',
    'high-performers': 'Alto Desempenho (15)',
    'needs-attention': 'Necessitam Atenção (12)',
    
    // Time ranges
    'current-week': 'Semana Atual',
    'current-term': 'Bimestre Atual',
    'academic-year': 'Ano Letivo',
    'custom-range': 'Período Personalizado',
    
    // Footer stats
    'total-students': 'Total de Estudantes',
    'subjects-tracked': 'Disciplinas Acompanhadas',
    'grades-entered': 'Notas Inseridas',
    'data-accuracy': 'Precisão dos Dados',
    
    // Common
    'min-ago': 'min atrás',
    'loading': 'Carregando...',
    'error': 'Erro',
    'success': 'Sucesso',
    'warning': 'Aviso',
    'info': 'Informação',
    'save': 'Salvar',
    'cancel': 'Cancelar',
    'close': 'Fechar',
    'confirm': 'Confirmar',
    'yes': 'Sim',
    'no': 'Não',
    'actions': 'Ações',
    'name': 'Nome',
    'email': 'Email',
    'date': 'Data',
    'status': 'Status',
    'active': 'Ativo',
    'inactive': 'Inativo',
    'search': 'Buscar',
    'filter': 'Filtrar',
    'sort': 'Ordenar',
    'export': 'Exportar',
    'import': 'Importar',
    'print': 'Imprimir',
    'download': 'Baixar',
    'upload': 'Enviar',
    'view': 'Visualizar',
    'edit': 'Editar',
    'delete': 'Excluir',
    'create': 'Criar',
    'update': 'Atualizar',
    'submit': 'Enviar',
    'reset': 'Limpar',
    
    // Theme
    'light-theme': 'Tema Claro',
    'dark-theme': 'Tema Escuro',
    'switch-language': 'Alterar idioma',
    'switch-theme': 'Alterar tema'
  },
  en: {
    login: 'Login',
    logout: 'Logout',
    username: 'Username',
    password: 'Password',
    'login-title': 'Teacher Login',
    'login-subtitle': 'Access the SINA system',
    'login-button': 'Sign In',
    'login-error': 'Invalid username or password',
    'login-required': 'Login is required to access this page',
    'remember-me': 'Remember me',
    'forgot-password': 'Forgot password',
    'welcome-back': 'Welcome back',
    professor: 'Teacher',
    'student-management': 'Student Management',
    'add-student': 'Add Student',
    'edit-student': 'Edit Student',
    'delete-student': 'Delete Student',
    'student-name': 'Student Name',
    'student-id': 'Student ID',
    'student-email': 'Student Email',
    'student-class': 'Class',
    'student-added': 'Student added successfully',
    'student-updated': 'Student updated successfully',
    'student-deleted': 'Student removed successfully',
    'confirm-delete-student': 'Are you sure you want to delete this student?',
    'student-list': 'Student List',
    'no-students': 'No students found',
    'search-students': 'Search students...',
    'grade-management': 'Grade Management',
    'add-grade': 'Add Grade',
    'edit-grade': 'Edit Grade',
    'delete-grade': 'Delete Grade',
    'grade-value': 'Grade',
    'grade-subject': 'Subject',
    'grade-date': 'Date',
    'grade-type': 'Assessment Type',
    'grade-added': 'Grade added successfully',
    'grade-updated': 'Grade updated successfully',
    'grade-deleted': 'Grade deleted successfully',
    'confirm-delete-grade': 'Are you sure you want to delete this grade?',
    'grade-list': 'Grade List',
    'no-grades': 'No grades found',
    'student-grades': 'Student Grades',
    'average-grade': 'Average',
    grades: 'grades',
    'select-student': 'Select student',
    'select-subject': 'Select subject',
    'portuguese-language': 'Portuguese Language',
    'english-language': 'English Language',
    arts: 'Arts',
    'physical-education': 'Physical Education',
    mathematics: 'Mathematics',
    history: 'History',
    geography: 'Geography',
    sociology: 'Sociology',
    philosophy: 'Philosophy',
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    exam: 'Exam',
    assignment: 'Assignment',
    quiz: 'Quiz',
    project: 'Project',
    participation: 'Participation',
    overview: 'Overview',
    subjects: 'Subjects',
    attendance: 'Attendance',
    students: 'Students',
    settings: 'Settings',
    help: 'Help',
    reports: 'Reports',
    more: 'More',
    dashboard: 'Dashboard',
    'class-wide-performance-metrics': 'Class performance metrics',
    'subject-specific-analytics': 'Subject-specific analytics',
    'attendance-tracking-patterns': 'Attendance tracking patterns',
    'individual-student-analytics': 'Individual student analytics',
    'grade-5-teacher': '5th Grade Teacher',
    'student-performance-overview': 'Student Performance Overview',
    'monitor-academic-progress': 'Monitor academic progress and identify intervention opportunities',
    'last-updated': 'Last updated',
    refresh: 'Refresh',
    auto: 'Auto',
    manual: 'Manual',
    'class-average-grade': 'Class Average Grade',
    'across-all-subjects': 'Across all subjects',
    'attendance-rate': 'Attendance Rate',
    'current-month': 'Current month',
    'students-at-risk': 'Students at Risk',
    'need-attention': 'Need attention',
    'grade-improvement': 'Grade Improvement',
    'students-improving': 'Students improving',
    'context-filters': 'Context Filters',
    class: 'Class',
    'student-group': 'Student Group',
    'time-range': 'Time Range',
    'select-class': 'Select class...',
    'select-student-group': 'Select student group...',
    'select-time-range': 'Select time range...',
    'active-students': 'Active Students',
    'reset-filters': 'Clear Filters',
    'class-5a-28-students': 'Class 5A (28 students)',
    'class-5b-26-students': 'Class 5B (26 students)',
    'class-5c-24-students': 'Class 5C (24 students)',
    'all-classes-78-students': 'All Classes (78 students)',
    'morning-session': 'Morning session',
    'afternoon-session': 'Afternoon session',
    'combined-view': 'Combined view',
    'all-students': 'All Students',
    'at-risk-students': 'At-Risk Students (8)',
    'high-performers': 'High Performers (15)',
    'needs-attention': 'Needs Attention (12)',
    'current-week': 'Current Week',
    'current-term': 'Current Term',
    'academic-year': 'Academic Year',
    'custom-range': 'Custom Range',
    'total-students': 'Total Students',
    'subjects-tracked': 'Subjects Tracked',
    'grades-entered': 'Grades Entered',
    'data-accuracy': 'Data Accuracy',
    'min-ago': 'min ago',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    confirm: 'Confirm',
    yes: 'Yes',
    no: 'No',
    actions: 'Actions',
    name: 'Name',
    email: 'Email',
    date: 'Date',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    export: 'Export',
    import: 'Import',
    print: 'Print',
    download: 'Download',
    upload: 'Upload',
    view: 'View',
    edit: 'Edit',
    delete: 'Delete',
    create: 'Create',
    update: 'Update',
    submit: 'Submit',
    reset: 'Reset',
    'light-theme': 'Light Theme',
    'dark-theme': 'Dark Theme',
    'switch-language': 'Switch language',
    'switch-theme': 'Switch theme'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sina-current-language') || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sina-current-language', currentLanguage);
    }
  }, [currentLanguage]);

  const switchLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
    }
  };

  const translate = (key) => {
    return translations.pt[key] || key;
  };

  const value = {
    currentLanguage,
    switchLanguage,
    translate,
    t: translate
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};