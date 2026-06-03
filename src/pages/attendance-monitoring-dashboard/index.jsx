import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import Header from '../../components/ui/Header';
import TabNavigation from '../../components/ui/TabNavigation';
import StudentContextSelector from '../../components/ui/StudentContextSelector';
import AlertNotificationBanner from '../../components/ui/AlertNotificationBanner';
import AttendanceHeaderControls from './components/AttendanceHeaderControls';
import AttendanceKPICards from './components/AttendanceKPICards';
import AttendanceCalendarHeatMap from './components/AttendanceCalendarHeatMap';
import AttendancePatternTimeline from './components/AttendancePatternTimeline';
import AtRiskStudentsList from './components/AtRiskStudentsList';
import AttendanceAnalyticsCharts from './components/AttendanceAnalyticsCharts';

const AttendanceMonitoringDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('class-5a');
  const [attendanceFilter, setAttendanceFilter] = useState('all');
  const [contextFilters, setContextFilters] = useState({
    class: 'class-5a',
    student: 'all-students',
    timeRange: 'current-term'
  });
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Handle context changes from StudentContextSelector
  const handleContextChange = (newContext) => {
    setContextFilters(newContext);
    setSelectedClass(newContext.class);
  };

  // Handle date changes from header controls
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  // Handle class changes from header controls
  const handleClassChange = (newClass) => {
    setSelectedClass(newClass);
    setContextFilters(prev => ({ ...prev, class: newClass }));
  };

  // Handle filter changes from header controls
  const handleFilterChange = (newFilter) => {
    setAttendanceFilter(newFilter);
  };

  const { students } = useData();

  // Handle student selection from various components
  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const getClassLabel = (classKey) => {
    switch (classKey) {
      case 'class-5a':
        return '5A';
      case 'class-5b':
        return '5B';
      case 'class-5c':
        return '5C';
      default:
        return 'All Classes';
    }
  };

  const getAttendanceStatus = (attendanceFilter, index) => {
    const fallbackStatus = ['Present', 'Absent', 'Tardy', 'Excused'][index % 4];
    switch (attendanceFilter) {
      case 'present':
        return 'Present';
      case 'absent':
        return 'Absent';
      case 'tardy':
        return 'Tardy';
      case 'excused':
        return 'Excused';
      case 'at-risk':
        return index % 2 === 0 ? 'Absent' : 'Tardy';
      default:
        return fallbackStatus;
    }
  };

  const downloadCSV = (filename, csvContent) => {
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle export functionality
  const handleExport = (type, filters) => {
    const studentsToExport = students.filter((student) => {
      if (filters.class === 'all-classes') return true;
      return student.class.toUpperCase() === getClassLabel(filters.class);
    });

    const rows = studentsToExport.map((student, index) => ({
      studentName: student.name,
      studentClass: student.class,
      status: getAttendanceStatus(filters.filter, index),
      notes: filters.filter === 'at-risk' ? 'Monitor closely' : ''
    }));

    const filteredRows = rows.filter((row) => {
      if (filters.filter === 'present') return row.status === 'Present';
      if (filters.filter === 'absent') return row.status === 'Absent';
      if (filters.filter === 'tardy') return row.status === 'Tardy';
      if (filters.filter === 'excused') return row.status === 'Excused';
      if (filters.filter === 'at-risk') return ['Absent', 'Tardy'].includes(row.status);
      return true;
    });

    const csvHeader = 'Date,Class,Period,Filter,Student,Status,Notes';
    const csvRows = filteredRows.map((row) =>
      [filters.date, row.studentClass, filters.period, filters.filter, row.studentName, row.status, row.notes]
        .map((value) => `"${String(value).replace(/"/g, '""')}"`)
        .join(',')
    );

    const filename = `attendance-${type}-${filters.date}.csv`;
    downloadCSV(filename, [csvHeader, ...csvRows].join('\n'));
  };

  // Set page title
  useEffect(() => {
    document.title = 'Attendance Monitoring Dashboard - SINA';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TabNavigation />
      
      <main className="pt-32 md:pt-24 pb-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-text-primary mb-2">
              Attendance Monitoring Dashboard
            </h1>
            <p className="text-text-secondary">
              Real-time attendance tracking with early intervention alerts and pattern analysis for proactive student support.
            </p>
          </div>

          {/* Context Selector */}
          <StudentContextSelector onContextChange={handleContextChange} />

          {/* Alert Banner */}
          <AlertNotificationBanner />

          {/* Header Controls */}
          <AttendanceHeaderControls
            onDateChange={handleDateChange}
            onClassChange={handleClassChange}
            onFilterChange={handleFilterChange}
            onExport={handleExport}
          />

          {/* KPI Cards */}
          <AttendanceKPICards
            selectedDate={selectedDate}
            selectedClass={selectedClass}
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
            {/* Main Visualization Area (9 cols equivalent) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Attendance Calendar Heat Map */}
              <AttendanceCalendarHeatMap
                selectedDate={selectedDate}
                selectedClass={selectedClass}
                onStudentClick={handleStudentSelect}
              />

              {/* Attendance Pattern Timeline */}
              <AttendancePatternTimeline
                selectedClass={selectedClass}
                timeRange={contextFilters.timeRange}
              />
            </div>

            {/* Right Panel (3 cols equivalent) */}
            <div className="lg:col-span-1">
              <AtRiskStudentsList
                onStudentSelect={handleStudentSelect}
              />
            </div>
          </div>

          {/* Bottom Analytics Section */}
          <AttendanceAnalyticsCharts
            selectedClass={selectedClass}
            timeRange={contextFilters.timeRange}
          />
        </div>
      </main>
    </div>
  );
};

export default AttendanceMonitoringDashboard;