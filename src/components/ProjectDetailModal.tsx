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
  AlertCircle
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'architecture' | 'sandbox' | 'features'>('architecture');

  // Interactive Sandbox state for CRUD API
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState<number>(0);
  const [customBodyInput, setCustomBodyInput] = useState<string>('');
  const [responseLog, setResponseLog] = useState<{ status: number; text: string; time: string } | null>(null);
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

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
        time: `${Math.floor(Math.random() * 15 + 12)}ms`,
      });
    }, 350);
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
        <div className="px-6 border-b border-neutral-200 dark:border-[#2A2A2A] flex gap-4 bg-white dark:bg-[#1E1E1E]">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
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
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
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
            className={`py-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'features'
                ? 'border-[#FFA116] text-[#FFA116]'
                : 'border-transparent text-neutral-600 hover:text-neutral-900 dark:text-[#A3A3A3] dark:hover:text-[#E6E6E6]'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Architecture & Role</span>
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
                          <span>{isRequesting ? 'Sending...' : 'Send Request'}</span>
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
                              <span className="text-[#FFA116] font-bold">Status: {responseLog.status} OK</span>
                              <span className="text-neutral-500 dark:text-[#A3A3A3]">Latency: {responseLog.time}</span>
                            </div>
                          )}
                        </div>

                        {responseLog ? (
                          <pre className="p-3 rounded bg-white dark:bg-[#171717] text-[#FFA116] text-[11px] overflow-x-auto border border-orange-500/30 leading-relaxed animate-in fade-in">
                            {responseLog.text}
                          </pre>
                        ) : (
                          <div className="p-4 rounded bg-white dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-center text-neutral-500 dark:text-[#A3A3A3] text-xs font-sans">
                            Click "Send Request" to trigger this route controller and inspect the response.
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Code Architecture snippet */}
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-[#2A2A2A] text-xs font-mono text-neutral-700 dark:text-[#A3A3A3] flex items-center justify-between shadow-xs">
                    <span>Architecture: `routes/itemRoutes.js` → `controllers/itemController.js`</span>
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
                        Imposter Game — Turn & Role Simulator
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-[#A3A3A3]">
                        Test the turn-based secret word reveal mechanics and hidden imposter algorithm directly.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-orange-500/10 text-[#FFA116] border border-orange-500/30">
                      Multiplayer Party Engine
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

        </div>

        {/* Modal Footer with GitHub link */}
        <div className="px-6 py-4 border-t border-neutral-200 dark:border-[#2A2A2A] flex items-center justify-between bg-neutral-50 dark:bg-[#171717]">
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
