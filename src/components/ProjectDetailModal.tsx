import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Server, 
  Play, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  RefreshCw, 
  Send,
  Eye,
  EyeOff,
  Users,
  AlertCircle,
  Database,
  Plus,
  Pencil,
  Trash2
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

interface PennywiseTransaction {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  category: 'Food' | 'Travel' | 'Shopping' | 'Education' | 'Bills' | 'Salary' | 'Other';
  createdAt: string;
}

const PENNYWISE_CATEGORIES: PennywiseTransaction['category'][] = [
  'Food',
  'Travel',
  'Shopping',
  'Education',
  'Bills',
  'Salary',
  'Other',
];

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'architecture' | 'sandbox' | 'features' | 'challenges'>('architecture');

  // Interactive Sandbox state for CRUD API
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState<number>(0);
  const [customBodyInput, setCustomBodyInput] = useState<string>('');
  const [responseLog, setResponseLog] = useState<{ status: number; text: string; time: string } | null>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  // Pennywise Personal Finance Tracker Simulator state
  const [transactions, setTransactions] = useState<PennywiseTransaction[]>([
    { id: 104, title: 'Semester Textbooks & Lab Manual', amount: 1450, type: 'expense', category: 'Education', createdAt: '2026-10-04 14:20' },
    { id: 103, title: 'Campus Canteen & Snacks', amount: 380, type: 'expense', category: 'Food', createdAt: '2026-10-03 19:10' },
    { id: 102, title: 'Broadband Internet & Recharge', amount: 899, type: 'expense', category: 'Bills', createdAt: '2026-10-02 11:05' },
    { id: 101, title: 'Monthly Stipend / Allowance', amount: 15000, type: 'income', category: 'Salary', createdAt: '2026-10-01 09:00' },
  ]);
  const [txTitle, setTxTitle] = useState<string>('');
  const [txAmount, setTxAmount] = useState<string>('');
  const [txType, setTxType] = useState<'income' | 'expense'>('expense');
  const [txCategory, setTxCategory] = useState<PennywiseTransaction['category']>('Food');
  const [editingTxId, setEditingTxId] = useState<number | null>(null);
  const [lastSqlQuery, setLastSqlQuery] = useState<string>(
    `-- Parameterized Prepared Statement (prevents SQL injection)\nawait db.execute(\n  'SELECT t.id, t.title, t.amount, t.type, c.name AS category FROM transactions t JOIN categories c ON t.category_id = c.id ORDER BY t.id DESC'\n);`
  );

  // Imposter Game Mini-Simulator state
  const [gameStep, setGameStep] = useState<'setup' | 'passing' | 'reveal' | 'discussion'>('setup');
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(0);
  const [imposterIndex, setImposterIndex] = useState<number>(1);
  const [secretWord, setSecretWord] = useState<string>('Database Query');
  const [showSecretWord, setShowSecretWord] = useState<boolean>(false);

  // Initialize custom body when endpoint changes
  React.useEffect(() => {
    if (project.endpoints && project.endpoints[selectedEndpointIndex]) {
      setCustomBodyInput(project.endpoints[selectedEndpointIndex].sampleRequest || '');
      setResponseLog(null);
    }
  }, [selectedEndpointIndex, project]);

  const handleSendApiRequest = () => {
    setIsRequesting(true);
    const endpoint = project.endpoints?.[selectedEndpointIndex];
    if (!endpoint) return;

    setTimeout(() => {
      setIsRequesting(false);
      setResponseLog({
        status: endpoint.statusCode,
        text: endpoint.sampleResponse,
        time: 'Mock Response (Schema Contract Verified)',
      });
    }, 250);
  };

  // Pennywise computed financial summaries
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const currentBalance = totalIncome - totalExpenses;

  // Category-wise expense totals (simulating SQL SUM + GROUP BY)
  const categoryExpenseTotals = PENNYWISE_CATEGORIES.map((cat) => {
    const total = transactions
      .filter((t) => t.type === 'expense' && t.category === cat)
      .reduce((acc, curr) => acc + curr.amount, 0);
    return { category: cat, total };
  }).filter((item) => item.total > 0);

  const handleSaveTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = Number(txAmount);
    if (!txTitle.trim() || isNaN(parsedAmount) || parsedAmount <= 0) return;

    const categoryId = PENNYWISE_CATEGORIES.indexOf(txCategory) + 1;

    if (editingTxId !== null) {
      setTransactions((prev) =>
        prev.map((item) =>
          item.id === editingTxId
            ? { ...item, title: txTitle.trim(), amount: parsedAmount, type: txType, category: txCategory }
            : item
        )
      );
      setLastSqlQuery(
        `-- Parameterized Prepared Statement (prevents SQL injection)\nawait db.execute(\n  'UPDATE transactions SET title = ?, amount = ?, type = ?, category_id = ? WHERE id = ?',\n  ['${txTitle.trim()}', ${parsedAmount}, '${txType}', ${categoryId}, ${editingTxId}]\n);`
      );
      setEditingTxId(null);
    } else {
      const nextId = transactions.length > 0 ? Math.max(...transactions.map((t) => t.id)) + 1 : 101;
      const newRecord: PennywiseTransaction = {
        id: nextId,
        title: txTitle.trim(),
        amount: parsedAmount,
        type: txType,
        category: txCategory,
        createdAt: 'Just now',
      };
      // Prepend so newest records appear first
      setTransactions((prev) => [newRecord, ...prev]);
      setLastSqlQuery(
        `-- Parameterized Prepared Statement (prevents SQL injection)\nawait db.execute(\n  'INSERT INTO transactions (title, amount, type, category_id) VALUES (?, ?, ?, ?)',\n  ['${txTitle.trim()}', ${parsedAmount}, '${txType}', ${categoryId}]\n);`
      );
    }

    setTxTitle('');
    setTxAmount('');
  };

  const handleEditTransaction = (tx: PennywiseTransaction) => {
    setEditingTxId(tx.id);
    setTxTitle(tx.title);
    setTxAmount(String(tx.amount));
    setTxType(tx.type);
    setTxCategory(tx.category);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
    if (editingTxId === id) {
      setEditingTxId(null);
      setTxTitle('');
      setTxAmount('');
    }
    setLastSqlQuery(
      `-- Parameterized Prepared Statement (prevents SQL injection)\nawait db.execute(\n  'DELETE FROM transactions WHERE id = ?',\n  [${id}]\n);`
    );
  };

  const startImposterGame = () => {
    const words = ['Node.js Server', 'Database Index', 'Express Router', 'Cloud Function', 'API Gateway'];
    const chosenWord = words[Math.floor(Math.random() * words.length)];
    const chosenImposter = Math.floor(Math.random() * playerCount);
    
    setSecretWord(chosenWord);
    setImposterIndex(chosenImposter);
    setCurrentPlayerIndex(0);
    setShowSecretWord(false);
    setGameStep('passing');
  };

  const nextPlayer = () => {
    setShowSecretWord(false);
    if (currentPlayerIndex + 1 < playerCount) {
      setCurrentPlayerIndex(prev => prev + 1);
      setGameStep('passing');
    } else {
      setGameStep('discussion');
    }
  };

  return (
    <div 
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        id="project-detail-modal-content"
        className="relative w-full max-w-4xl bg-white dark:bg-[#1E1E1E] rounded-2xl border border-neutral-200 dark:border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-neutral-900 dark:text-[#E6E6E6]"
      >
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-neutral-200 dark:border-[#2A2A2A] flex items-start justify-between bg-neutral-50 dark:bg-[#171717]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-orange-500/10 text-[#FFA116] border border-orange-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#FFA116] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {project.status}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-2xl font-extrabold text-neutral-900 dark:text-[#E6E6E6]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#A3A3A3]">
              {project.subtitle}
            </p>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] hover:bg-neutral-100 dark:hover:bg-[#252525] transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-neutral-200 dark:border-[#2A2A2A] flex gap-2 sm:gap-4 bg-white dark:bg-[#1E1E1E] overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA116] rounded-sm ${
              activeTab === 'architecture'
                ? 'border-[#FFA116] text-[#FFA116]'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Problem & Solution</span>
          </button>

          <button
            onClick={() => setActiveTab('sandbox')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA116] rounded-sm ${
              activeTab === 'sandbox'
                ? 'border-[#FFA116] text-[#FFA116]'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6]'
            }`}
          >
            <Play className="w-4 h-4 text-[#FFA116]" />
            <span>Interactive Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('features')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA116] rounded-sm ${
              activeTab === 'features'
                ? 'border-[#FFA116] text-[#FFA116]'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6]'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Architecture & Role</span>
          </button>

          <button
            onClick={() => setActiveTab('challenges')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA116] rounded-sm ${
              activeTab === 'challenges'
                ? 'border-[#FFA116] text-[#FFA116]'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6]'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>Challenges & Improvements</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-neutral-700 dark:text-[#A3A3A3]">
          
          {/* TAB 1: ARCHITECTURE / PROBLEM & SOLUTION */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Problem */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] space-y-1.5 shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-[#FFA116]" />
                  The Problem
                </span>
                <p className="text-neutral-800 dark:text-[#E6E6E6] leading-relaxed text-sm">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116] flex items-center gap-1.5">
                  <Server className="w-4 h-4 text-[#FFA116]" />
                  Engineering Solution
                </span>
                <p className="text-neutral-800 dark:text-[#E6E6E6] leading-relaxed text-sm">
                  {project.solution}
                </p>
              </div>

              {/* Verified Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] mb-2">
                  Verified Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-neutral-100 dark:bg-[#171717] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Documented Results */}
              <div className="space-y-2 pt-2 border-t border-neutral-200 dark:border-[#2A2A2A]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                  Documented Results (Source of Truth)
                </h4>
                <ul className="space-y-2">
                  {project.documentedResults.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3]">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE SIMULATOR */}
          {activeTab === 'sandbox' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Simulator Honesty & Context Banner */}
              <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-[#171717] border border-neutral-300 dark:border-[#2A2A2A] flex items-start gap-3 text-xs text-neutral-600 dark:text-[#A3A3A3]">
                <AlertCircle className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-neutral-900 dark:text-[#E6E6E6]">
                    Interactive Frontend Simulator (Illustrative Demo)
                  </span>
                  <p className="leading-relaxed">
                    This in-browser simulator demonstrates data flows, schema contracts, and query patterns in local client state.
                    {project.liveDemoUrl && (
                      <> For production services, visit the{' '}
                        <a 
                          href={project.liveDemoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#FFA116] hover:underline font-semibold inline-flex items-center gap-1"
                        >
                          live deployment <ExternalLink className="w-3 h-3" />
                        </a>.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {project.interactiveType === 'pennywise' && (
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-[#E6E6E6] text-base">
                        Pennywise — Notes-Style Personal Finance Tracker Simulator
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                        Add, edit, or delete income and expenses, view category-wise totals (GROUP BY), and inspect the Aiven MySQL queries.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-orange-500/10 text-[#FFA116] border border-orange-500/30 self-start sm:self-auto">
                      MySQL + Express CRUD
                    </span>
                  </div>

                  {/* Financial Summary Bar: Total Income, Total Expenses, Current Balance */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A]">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                        Total Income
                      </div>
                      <div className="text-lg font-extrabold font-mono text-[#E6E6E6] mt-0.5 tabular-nums">
                        ₹{totalIncome.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A]">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                        Total Expenses
                      </div>
                      <div className="text-lg font-extrabold font-mono text-[#CC7A0A] mt-0.5 tabular-nums">
                        ₹{totalExpenses.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-orange-500/10 border border-[#FFA116]/40">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#FFA116]">
                        Current Balance
                      </div>
                      <div className="text-lg font-extrabold font-mono text-[#FFA116] mt-0.5 tabular-nums">
                        ₹{currentBalance.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  {/* Add / Edit Transaction Form (Notes-Style Interface) */}
                  <form
                    onSubmit={handleSaveTransaction}
                    className="p-4 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFA116]">
                        {editingTxId !== null ? `Editing Transaction #${editingTxId}` : 'Record New Transaction'}
                      </span>
                      {editingTxId !== null && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingTxId(null);
                            setTxTitle('');
                            setTxAmount('');
                          }}
                          className="text-xs font-mono text-neutral-500 hover:text-[#E6E6E6] underline cursor-pointer"
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                      <input
                        type="text"
                        placeholder="Note / Description (e.g., Bus Pass, Groceries)"
                        value={txTitle}
                        onChange={(e) => setTxTitle(e.target.value)}
                        required
                        className="sm:col-span-4 px-3 py-2 rounded-lg bg-white dark:bg-[#0F0F0F] border border-neutral-300 dark:border-[#2A2A2A] text-xs text-neutral-900 dark:text-[#E6E6E6] focus:outline-none focus:border-[#FFA116]"
                      />
                      <input
                        type="number"
                        placeholder="Amount (₹)"
                        min="1"
                        value={txAmount}
                        onChange={(e) => setTxAmount(e.target.value)}
                        required
                        className="sm:col-span-2 px-3 py-2 rounded-lg bg-white dark:bg-[#0F0F0F] border border-neutral-300 dark:border-[#2A2A2A] text-xs font-mono text-neutral-900 dark:text-[#E6E6E6] focus:outline-none focus:border-[#FFA116]"
                      />
                      <select
                        value={txType}
                        onChange={(e) => setTxType(e.target.value as 'income' | 'expense')}
                        aria-label="Transaction Type"
                        className="sm:col-span-2 px-2.5 py-2 rounded-lg bg-white dark:bg-[#0F0F0F] border border-neutral-300 dark:border-[#2A2A2A] text-xs text-neutral-900 dark:text-[#E6E6E6] focus:outline-none focus:border-[#FFA116]"
                      >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                      </select>
                      <select
                        value={txCategory}
                        onChange={(e) => setTxCategory(e.target.value as PennywiseTransaction['category'])}
                        aria-label="Transaction Category"
                        className="sm:col-span-2 px-2.5 py-2 rounded-lg bg-white dark:bg-[#0F0F0F] border border-neutral-300 dark:border-[#2A2A2A] text-xs text-neutral-900 dark:text-[#E6E6E6] focus:outline-none focus:border-[#FFA116]"
                      >
                        {PENNYWISE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="sm:col-span-2 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-xs transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{editingTxId !== null ? 'Update' : 'Add Note'}</span>
                      </button>
                    </div>
                  </form>

                  {/* Two-Column View: Newest-First Transaction History & Category-Wise Expense Totals */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Transaction History (Newest First) */}
                    <div className="md:col-span-7 p-4 rounded-xl bg-neutral-50 dark:bg-[#0F0F0F] border border-neutral-200 dark:border-[#2A2A2A] space-y-2.5">
                      <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#2A2A2A] pb-2">
                        <span className="text-xs font-mono font-bold text-neutral-800 dark:text-[#E6E6E6]">
                          Transaction History (Newest First)
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500 dark:text-[#A3A3A3]">
                          {transactions.length} records
                        </span>
                      </div>

                      <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                        {transactions.map((tx) => (
                          <div
                            key={tx.id}
                            className="p-2.5 rounded-lg bg-white dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between gap-2"
                          >
                            <div className="min-w-0">
                              <div className="text-xs font-semibold text-neutral-900 dark:text-[#E6E6E6] truncate">
                                {tx.title}
                              </div>
                              <div className="text-[11px] text-neutral-500 dark:text-[#A3A3A3] font-mono">
                                {tx.category} · {tx.type.toUpperCase()} · #{tx.id}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <span
                                className={`text-xs font-mono font-bold tabular-nums ${
                                  tx.type === 'income' ? 'text-[#FFA116]' : 'text-[#E6E6E6]'
                                }`}
                              >
                                {tx.type === 'income' ? '+' : '-'}₹{tx.amount.toLocaleString('en-IN')}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleEditTransaction(tx)}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-[#252525] text-neutral-500 dark:text-[#A3A3A3] hover:text-[#FFA116] transition-colors cursor-pointer"
                                title="Edit transaction"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteTransaction(tx.id)}
                                className="p-1 rounded hover:bg-neutral-200 dark:hover:bg-[#252525] text-neutral-500 dark:text-[#A3A3A3] hover:text-[#CC7A0A] transition-colors cursor-pointer"
                                title="Delete transaction"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category-Wise Expense Totals (SQL SUM + GROUP BY) */}
                    <div className="md:col-span-5 p-4 rounded-xl bg-neutral-50 dark:bg-[#0F0F0F] border border-neutral-200 dark:border-[#2A2A2A] space-y-2.5 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-[#2A2A2A] pb-2">
                          <span className="text-xs font-mono font-bold text-neutral-800 dark:text-[#E6E6E6]">
                            Category Expense Totals
                          </span>
                          <span className="text-[10px] font-mono text-[#FFA116]">
                            SUM + GROUP BY
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          {categoryExpenseTotals.map((item) => (
                            <div
                              key={item.category}
                              className="px-3 py-2 rounded-lg bg-white dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between text-xs font-mono"
                            >
                              <span className="text-neutral-800 dark:text-[#E6E6E6]">{item.category}</span>
                              <span className="text-[#FFA116] font-bold tabular-nums">
                                ₹{item.total.toLocaleString('en-IN')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-neutral-200 dark:border-[#2A2A2A] text-[10px] font-mono text-neutral-500 dark:text-[#A3A3A3]">
                        FK: transactions.category_id &rarr; categories.id
                      </div>
                    </div>
                  </div>

                  {/* Executed MySQL Query Log */}
                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] font-mono text-xs space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-neutral-500 dark:text-[#A3A3A3]">
                      <span className="flex items-center gap-1.5 text-[#FFA116] font-bold uppercase">
                        <Database className="w-3.5 h-3.5" />
                        Executed MySQL Query (Aiven Cloud DB)
                      </span>
                      <span>Relational Schema</span>
                    </div>
                    <pre className="text-[11px] text-neutral-800 dark:text-[#E6E6E6] overflow-x-auto pt-1">
                      {lastSqlQuery}
                    </pre>
                  </div>
                </div>
              )}

              {project.interactiveType === 'crud-api' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-[#E6E6E6] text-base">
                        Interactive REST API Client & Response Inspector
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                        Simulate live HTTP requests to the controller routes and inspect JSON payload responses.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10 text-[#FFA116] border border-orange-500/30">
                      Postman Verified
                    </span>
                  </div>

                  {/* Endpoint Selector */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {project.endpoints?.map((ep, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedEndpointIndex(idx)}
                        type="button"
                        className={`p-2.5 rounded-lg border text-left font-mono text-xs transition-all cursor-pointer ${
                          selectedEndpointIndex === idx
                            ? 'border-[#FFA116] bg-orange-500/10 text-[#FFA116] ring-1 ring-orange-500/50'
                            : 'border-neutral-200 dark:border-[#2A2A2A] bg-white dark:bg-[#171717] text-neutral-600 dark:text-[#A3A3A3] hover:border-neutral-400 dark:hover:border-[#3A3A3A]'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold">
                          <span
                            className={`px-1 py-0.2 rounded text-[10px] ${
                              ep.method === 'GET'
                                ? 'text-amber-500 dark:text-amber-400'
                                : ep.method === 'POST'
                                ? 'text-[#FFA116]'
                                : ep.method === 'PUT'
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-orange-600 dark:text-orange-400'
                            }`}
                          >
                            {ep.method}
                          </span>
                        </div>
                        <div className="text-[11px] truncate text-neutral-800 dark:text-[#E6E6E6] mt-1">
                          {ep.path}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Request bar & Action */}
                  {project.endpoints && project.endpoints[selectedEndpointIndex] && (
                    <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#0F0F0F] text-neutral-800 dark:text-[#E6E6E6] font-mono text-xs border border-neutral-200 dark:border-[#2A2A2A] space-y-3 shadow-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-200 dark:border-[#2A2A2A]">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded font-bold text-[11px] bg-neutral-200 dark:bg-[#252525] text-[#FFA116]">
                            {project.endpoints[selectedEndpointIndex].method}
                          </span>
                          <span className="text-neutral-900 dark:text-[#E6E6E6]">
                            {project.endpoints[selectedEndpointIndex].path}
                          </span>
                        </div>
                        <button
                          onClick={handleSendApiRequest}
                          disabled={isRequesting}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-sans text-xs font-bold shadow-xs disabled:opacity-50 transition-all self-end sm:self-auto cursor-pointer"
                        >
                          <Send className={`w-3.5 h-3.5 ${isRequesting ? 'animate-spin' : ''}`} />
                          <span>{isRequesting ? 'Validating...' : 'Test Endpoint (Mock)'}</span>
                        </button>
                      </div>

                      <div className="text-neutral-600 dark:text-[#A3A3A3] text-[11px]">
                        <span className="text-neutral-500 dark:text-[#A3A3A3]">Description: </span>
                        {project.endpoints[selectedEndpointIndex].description}
                      </div>

                      {/* Request Body if POST/PUT */}
                      {project.endpoints[selectedEndpointIndex].sampleRequest && (
                        <div className="space-y-1">
                          <span className="text-neutral-500 dark:text-[#A3A3A3] text-[10px] uppercase tracking-wider">Payload Body (JSON):</span>
                          <pre className="p-2 rounded bg-white dark:bg-[#171717] text-[#FFA116] text-[11px] overflow-x-auto border border-neutral-200 dark:border-[#2A2A2A]">
                            {project.endpoints[selectedEndpointIndex].sampleRequest}
                          </pre>
                        </div>
                      )}

                      {/* Response Display */}
                      <div className="space-y-1 pt-2 border-t border-neutral-200 dark:border-[#2A2A2A]">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-neutral-500 dark:text-[#A3A3A3] uppercase tracking-wider">Controller Response:</span>
                          {responseLog && (
                            <div className="flex items-center gap-2">
                              <span className="text-[#FFA116] font-bold">Status: {responseLog.status}</span>
                              <span className="text-neutral-500 dark:text-[#A3A3A3] font-mono text-[10px]">{responseLog.time}</span>
                            </div>
                          )}
                        </div>

                        {responseLog ? (
                          <pre className="p-3 rounded bg-white dark:bg-[#171717] text-[#FFA116] text-[11px] overflow-x-auto border border-orange-500/30 leading-relaxed animate-in fade-in">
                            {responseLog.text}
                          </pre>
                        ) : (
                          <div className="p-4 rounded bg-white dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-center text-neutral-500 dark:text-[#A3A3A3] text-xs font-sans">
                            Click "Test Endpoint (Mock)" to inspect the schema payload contract.
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Code Architecture snippet */}
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-xs font-mono text-neutral-700 dark:text-[#A3A3A3] flex items-center justify-between shadow-xs">
                    <span>Architecture: `routes/userRoutes.js` → `controllers/userController.js`</span>
                    <span className="text-[#FFA116] font-semibold">Modular Pattern</span>
                  </div>
                </div>
              )}

              {/* Imposter Game Interactive Simulator */}
              {project.interactiveType === 'imposter-game' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-[#E6E6E6] text-base">
                        Imposter Game — Pass &amp; Play Demo
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                        A mini version of the original single-device mode. The full real-time multiplayer game is live at the link in the footer.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10 text-[#FFA116] border border-orange-500/30">
                      Pass &amp; Play Mode
                    </span>
                  </div>

                  {/* Simulator Screen */}
                  <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#0F0F0F] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A] min-h-[280px] flex flex-col justify-center items-center text-center space-y-4 shadow-xs">
                    {gameStep === 'setup' && (
                      <div className="space-y-4 max-w-sm">
                        <div className="w-12 h-12 rounded-full bg-orange-500/15 text-[#FFA116] flex items-center justify-center mx-auto">
                          <Users className="w-6 h-6" />
                        </div>
                        <h5 className="text-lg font-bold text-neutral-900 dark:text-[#E6E6E6]">Party Game Setup</h5>
                        <p className="text-xs text-neutral-600 dark:text-[#A3A3A3]">
                          Configure players to launch the pass-and-play word assignment with 1 hidden imposter.
                        </p>
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-xs text-neutral-600 dark:text-[#A3A3A3] font-mono">Players:</span>
                          {[3, 4, 5, 6].map((num) => (
                            <button
                              key={num}
                              onClick={() => {
                                setPlayerCount(num);
                                setPlayers(Array.from({ length: num }, (_, i) => `Player ${i + 1}`));
                              }}
                              className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-colors cursor-pointer ${
                                playerCount === num ? 'bg-[#FFA116] text-[#0F0F0F]' : 'bg-neutral-200 dark:bg-[#252525] text-neutral-700 dark:text-[#A3A3A3] hover:bg-neutral-300 dark:hover:bg-[#2A2A2A]'
                              }`}
                            >
                              {num}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={startImposterGame}
                          className="w-full py-2.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-xs transition-colors cursor-pointer"
                        >
                          Start Party Round
                        </button>
                      </div>
                    )}

                    {gameStep === 'passing' && (
                      <div className="space-y-4 max-w-sm animate-in fade-in">
                        <div className="text-xs font-mono text-[#FFA116] uppercase tracking-wider font-semibold">
                          Pass Device To:
                        </div>
                        <h5 className="text-2xl font-black text-neutral-900 dark:text-[#E6E6E6]">{players[currentPlayerIndex]}</h5>
                        <p className="text-xs text-neutral-600 dark:text-[#A3A3A3]">
                          Ensure other players cannot see the screen before revealing your secret role.
                        </p>
                        <button
                          onClick={() => {
                            setShowSecretWord(false);
                            setGameStep('reveal');
                          }}
                          className="px-6 py-2.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-xs transition-colors cursor-pointer"
                        >
                          I am {players[currentPlayerIndex]} — Ready
                        </button>
                      </div>
                    )}

                    {gameStep === 'reveal' && (
                      <div className="space-y-4 max-w-sm animate-in zoom-in-95">
                        <div className="text-xs font-mono text-neutral-500 dark:text-[#A3A3A3]">
                          Player {currentPlayerIndex + 1} of {playerCount}
                        </div>
                        <h5 className="text-xl font-bold text-neutral-900 dark:text-[#E6E6E6]">{players[currentPlayerIndex]}</h5>

                        <div className="p-4 rounded-xl bg-white dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] space-y-2 shadow-xs">
                          <button
                            onClick={() => setShowSecretWord(!showSecretWord)}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-100 hover:bg-neutral-200 dark:bg-[#252525] dark:hover:bg-[#2A2A2A] text-xs font-mono text-neutral-800 dark:text-[#E6E6E6] transition-colors cursor-pointer"
                          >
                            {showSecretWord ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            <span>{showSecretWord ? 'Hide Secret Word' : 'Tap to Reveal Secret Word'}</span>
                          </button>

                          {showSecretWord ? (
                            <div className="pt-2 animate-in fade-in">
                              {currentPlayerIndex === imposterIndex ? (
                                <div className="text-[#FFA116] font-extrabold text-lg">
                                  YOU ARE THE IMPOSTER!
                                  <p className="text-[11px] text-neutral-600 dark:text-[#A3A3A3] font-normal mt-1">
                                    Bluff your way through the questions without knowing the secret keyword!
                                  </p>
                                </div>
                              ) : (
                                <div className="text-[#FFA116] font-extrabold text-lg">
                                  Secret Word: {secretWord}
                                  <p className="text-[11px] text-neutral-600 dark:text-[#A3A3A3] font-normal mt-1">
                                    Give subtle clues without revealing the exact word to the imposter.
                                  </p>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="text-[11px] text-neutral-400 italic pt-1">
                              Word masked for privacy
                            </div>
                          )}
                        </div>

                        <button
                          onClick={nextPlayer}
                          className="w-full py-2.5 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-xs transition-colors cursor-pointer"
                        >
                          {currentPlayerIndex + 1 < playerCount ? 'Done — Pass to Next Player' : 'All Players Ready — Start Discussion'}
                        </button>
                      </div>
                    )}

                    {gameStep === 'discussion' && (
                      <div className="space-y-4 max-w-sm animate-in fade-in">
                        <div className="w-10 h-10 rounded-full bg-orange-500/20 text-[#FFA116] flex items-center justify-center mx-auto">
                          <Users className="w-5 h-5" />
                        </div>
                        <h5 className="text-xl font-bold text-neutral-900 dark:text-[#E6E6E6]">Discussion & Vote Phase</h5>
                        <p className="text-xs text-neutral-600 dark:text-[#A3A3A3]">
                          All players have viewed their roles. Discuss the clues and vote to uncover the secret imposter!
                        </p>
                        <div className="p-3 rounded-lg bg-white dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-xs font-mono text-neutral-800 dark:text-[#E6E6E6] space-y-1 text-left shadow-xs">
                          <div>Secret Word was: <span className="text-[#FFA116] font-bold">{secretWord}</span></div>
                          <div>Actual Imposter was: <span className="text-amber-500 dark:text-amber-400 font-bold">{players[imposterIndex]}</span></div>
                        </div>
                        <button
                          onClick={() => setGameStep('setup')}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#252525] dark:hover:bg-[#2A2A2A] text-xs font-medium text-neutral-800 dark:text-[#E6E6E6] transition-colors cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Play New Round</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: FEATURES & ROLE */}
          {activeTab === 'features' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* My Role / What I built */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] mb-2">
                  My Personal Contribution (From Source Documents)
                </h4>
                <div className="space-y-2">
                  {project.role.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] flex items-start gap-2.5 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-orange-500/15 text-[#FFA116] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-800 dark:text-[#E6E6E6] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3] mb-2">
                  Implemented Features
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-[#A3A3A3]">
                      <CheckCircle2 className="w-4 h-4 text-[#FFA116] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & Approach */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-[#0F0F0F] text-neutral-800 dark:text-[#E6E6E6] border border-neutral-200 dark:border-[#2A2A2A] space-y-2 shadow-xs">
                <span className="text-xs font-mono text-[#FFA116] uppercase tracking-wider font-semibold">
                  Architecture & Code Structure
                </span>
                <p className="text-xs text-neutral-600 dark:text-[#A3A3A3] leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: CHALLENGES & IMPROVEMENTS */}
          {activeTab === 'challenges' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Key Challenges Encountered */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#FFA116]" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                    Technical Challenges & Trade-offs
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {project.challenges && project.challenges.length > 0 ? (
                    project.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] flex items-start gap-3 shadow-xs"
                      >
                        <span className="w-5 h-5 rounded-full bg-orange-500/10 text-[#FFA116] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-800 dark:text-[#E6E6E6] leading-relaxed">
                          {challenge}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-500">No specific challenges recorded.</p>
                  )}
                </div>
              </div>

              {/* Future Improvements & What's Next */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA116]" />
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-[#A3A3A3]">
                    What I Would Build Next (Planned Improvements)
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {project.improvements && project.improvements.length > 0 ? (
                    project.improvements.map((improvement, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] flex items-start gap-3 shadow-xs"
                      >
                        <span className="w-5 h-5 rounded-full bg-orange-500/10 text-[#FFA116] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          &rarr;
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-800 dark:text-[#E6E6E6] leading-relaxed">
                          {improvement}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-neutral-500">No planned improvements recorded.</p>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with GitHub link */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between gap-3 flex-wrap bg-neutral-50 dark:bg-[#171717]">
          <div className="flex items-center gap-2 flex-wrap">
            <a
              id="modal-github-repo-btn"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-[#252525] dark:hover:bg-[#2A2A2A] text-neutral-800 dark:text-[#E6E6E6] font-semibold text-xs transition-colors border border-neutral-300 dark:border-[#2A2A2A]"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            {project.liveDemoUrl && (
              <a
                id="modal-live-demo-btn"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFA116] hover:bg-[#CC7A0A] text-[#0F0F0F] font-bold text-xs transition-colors"
              >
                <span>{project.interactiveType === 'imposter-game' ? 'Play Live Game' : 'View Live Demo'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
