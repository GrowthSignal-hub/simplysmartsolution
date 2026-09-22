import React, { useState } from 'react';
import { Service, CaseStudy, Lead, MediaItem, SiteSettings, ClientProject } from '../types';

interface AdminPanelProps {
  siteSettings: SiteSettings;
  onUpdateSiteSettings: (settings: SiteSettings) => void;
  services: Service[];
  onUpdateServices: (services: Service[]) => void;
  caseStudies: CaseStudy[];
  onUpdateCaseStudies: (studies: CaseStudy[]) => void;
  leads: Lead[];
  onUpdateLeads: (leads: Lead[]) => void;
  mediaItems: MediaItem[];
  onUpdateMediaItems: (items: MediaItem[]) => void;
  clientProjects: ClientProject[];
  onCloseAdmin: () => void;
}

type AdminTab = 'dashboard' | 'taglines' | 'services' | 'media' | 'caseStudies' | 'leads' | 'portal' | 'seo';

export const AdminPanel: React.FC<AdminPanelProps> = ({
  siteSettings,
  onUpdateSiteSettings,
  services,
  onUpdateServices,
  caseStudies,
  onUpdateCaseStudies,
  leads,
  onUpdateLeads,
  mediaItems,
  onUpdateMediaItems,
  clientProjects,
  onCloseAdmin,
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [selectedMediaSection, setSelectedMediaSection] = useState<string>('all');
  const [serviceEditItem, setServiceEditItem] = useState<Service | null>(null);
  const [isAddingService, setIsAddingService] = useState(false);
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(null), 2500);
  };

  // Local settings state
  const [settingsForm, setSettingsForm] = useState<SiteSettings>({ ...siteSettings });

  // Taglines array state
  const [taglinesState, setTaglinesState] = useState<string[]>([...siteSettings.taglines]);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...settingsForm,
      taglines: taglinesState,
    };
    onUpdateSiteSettings(updated);
    showToast('Brand settings & animated taglines updated successfully!');
  };

  const handleLeadStatusChange = (leadId: string, newStatus: Lead['status']) => {
    const updated = leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l));
    onUpdateLeads(updated);
    showToast(`Lead status updated to ${newStatus}`);
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceEditItem) return;

    if (isAddingService) {
      onUpdateServices([...services, serviceEditItem]);
      showToast('New service added successfully!');
    } else {
      onUpdateServices(services.map((s) => (s.id === serviceEditItem.id ? serviceEditItem : s)));
      showToast('Service updated successfully!');
    }
    setServiceEditItem(null);
    setIsAddingService(false);
  };

  const handleDeleteService = (id: string) => {
    if (confirm('Are you sure you want to remove this service?')) {
      onUpdateServices(services.filter((s) => s.id !== id));
      showToast('Service removed.');
    }
  };

  const filteredMedia = mediaItems.filter((m) =>
    selectedMediaSection === 'all' ? true : m.section === selectedMediaSection
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex flex-col">
      
      {/* Top Admin Navigation Header */}
      <header className="bg-[#0B1F3A] text-white px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1769E0] flex items-center justify-center text-white font-bold text-sm">
            <i className="fa-solid fa-gauge-high"></i>
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>Simply Smart Solution</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Live Admin Console
              </span>
            </div>
            <div className="text-[11px] text-slate-300">
              Manage Content, Animated Taglines, Services, Media &amp; CRM Pipeline
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {saveToast && (
            <div className="px-3 py-1 rounded-lg bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 animate-bounce">
              <i className="fa-solid fa-check"></i>
              <span>{saveToast}</span>
            </div>
          )}
          <button
            onClick={onCloseAdmin}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left text-[11px]"></i>
            <span>Return to Live Website</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace Container */}
      <div className="flex-1 flex overflow-hidden bg-slate-100">
        
        {/* Left Admin Sidebar Tabs */}
        <aside className="w-60 bg-[#06264A] text-slate-300 p-3 border-r border-white/5 flex flex-col justify-between shrink-0 overflow-y-auto">
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
              System Navigation
            </div>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-chart-pie w-4 text-center"></i>
              <span>Dashboard Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('taglines')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'taglines'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-repeat w-4 text-center"></i>
              <span>Hero &amp; Taglines</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'services'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-shapes w-4 text-center"></i>
              <span>Services CMS</span>
            </button>

            <button
              onClick={() => setActiveTab('media')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'media'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-folder-tree w-4 text-center"></i>
              <span>Asset &amp; Media Manager</span>
            </button>

            <button
              onClick={() => setActiveTab('caseStudies')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'caseStudies'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-briefcase w-4 text-center"></i>
              <span>Case Studies</span>
            </button>

            <button
              onClick={() => setActiveTab('leads')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                activeTab === 'leads'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-users-viewfinder w-4 text-center"></i>
                <span>Leads &amp; CRM</span>
              </div>
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                {leads.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('portal')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'portal'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-laptop-code w-4 text-center"></i>
              <span>Client Project Portal</span>
            </button>

            <button
              onClick={() => setActiveTab('seo')}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all ${
                activeTab === 'seo'
                  ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-magnifying-glass-chart w-4 text-center"></i>
              <span>SEO / AEO / GEO</span>
            </button>
          </div>

          <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-slate-400">
            <div className="font-bold text-white mb-1">Architecture</div>
            <div>Pure MVC Separation</div>
            <div className="text-[10px] text-emerald-400 mt-1">● Database Sync Active</div>
          </div>
        </aside>

        {/* Right Content Viewport */}
        <main className="flex-1 p-6 overflow-y-auto">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6 max-w-6xl">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Platform Performance Overview</h2>
                <p className="text-xs text-[#52657D]">Real-time synchronization across public site and client records.</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Total Consultation Leads</span>
                    <i className="fa-solid fa-envelope-open-text text-[#1769E0]"></i>
                  </div>
                  <div className="text-2xl font-black text-[#0B1F3A] font-mono">{leads.length}</div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    +12% this week
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Active Services</span>
                    <i className="fa-solid fa-shapes text-[#1769E0]"></i>
                  </div>
                  <div className="text-2xl font-black text-[#0B1F3A] font-mono">
                    {services.filter((s) => s.isActive).length}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    All loaded dynamically
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Media Catalog</span>
                    <i className="fa-solid fa-images text-[#1769E0]"></i>
                  </div>
                  <div className="text-2xl font-black text-[#0B1F3A] font-mono">{mediaItems.length}</div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    10 Dedicated Section Folders
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Active Client Projects</span>
                    <i className="fa-solid fa-diagram-project text-[#1769E0]"></i>
                  </div>
                  <div className="text-2xl font-black text-[#1769E0] font-mono">{clientProjects.length}</div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    On-track delivery
                  </div>
                </div>
              </div>

              {/* Recent Inquiries List */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <h3 className="text-sm font-bold text-[#0B1F3A]">Recent Strategy Consultation Inquiries</h3>
                  <button onClick={() => setActiveTab('leads')} className="text-xs text-[#1769E0] font-bold hover:underline">
                    View Full CRM Pipeline →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400">
                        <th className="py-2">Contact</th>
                        <th className="py-2">Company</th>
                        <th className="py-2">Market</th>
                        <th className="py-2">Service</th>
                        <th className="py-2">Budget</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50">
                          <td className="py-3 font-semibold text-[#10233F]">{lead.name}</td>
                          <td className="py-3 text-slate-600">{lead.company}</td>
                          <td className="py-3 text-slate-600">{lead.country}</td>
                          <td className="py-3 text-[#1769E0] font-medium">{lead.serviceInterested}</td>
                          <td className="py-3 text-slate-600">{lead.budget}</td>
                          <td className="py-3">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                              lead.status === 'new' ? 'bg-blue-100 text-blue-700' :
                              lead.status === 'mql' ? 'bg-amber-100 text-amber-700' :
                              lead.status === 'proposal' ? 'bg-purple-100 text-purple-700' :
                              'bg-emerald-100 text-emerald-700'
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HERO & TAGLINES */}
          {activeTab === 'taglines' && (
            <div className="max-w-3xl space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Hero &amp; Animated Taglines Management</h2>
                <p className="text-xs text-[#52657D]">
                  Edit the live headline, supporting description, and the sequence of looping taglines shown in the header.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Hero Primary Headline
                  </label>
                  <input
                    type="text"
                    value={settingsForm.heroHeadline}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroHeadline: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-[#10233F]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Hero Highlighted Phrase (Gradient Accent)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.heroHighlight}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroHighlight: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-[#10233F]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Hero Supporting Description
                  </label>
                  <textarea
                    rows={3}
                    value={settingsForm.heroSupportingText}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroSupportingText: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-[#10233F]"
                  ></textarea>
                </div>

                {/* Looping Taglines Sequence */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-bold text-[#10233F]">
                      Header Looping Animated Taglines Sequence
                    </label>
                    <span className="text-[10px] text-slate-400">Cycles every 2.8s</span>
                  </div>

                  <div className="space-y-2">
                    {taglinesState.map((tagline, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1769E0] font-bold text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <input
                          type="text"
                          value={tagline}
                          onChange={(e) => {
                            const copy = [...taglinesState];
                            copy[idx] = e.target.value;
                            setTaglinesState(copy);
                          }}
                          className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-xs text-[#10233F]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#1769E0] text-white font-bold text-xs hover:bg-[#155fc9] transition-colors shadow-md shadow-blue-500/20"
                  >
                    Save Changes to Live Site
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: SERVICES CMS */}
          {activeTab === 'services' && (
            <div className="space-y-6 max-w-5xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F3A]">Services Content Management</h2>
                  <p className="text-xs text-[#52657D]">Add, edit, or configure services and their rich details modal content.</p>
                </div>

                <button
                  onClick={() => {
                    setIsAddingService(true);
                    setServiceEditItem({
                      id: 'srv-' + Date.now(),
                      slug: 'custom-service',
                      name: 'New Growth Capability',
                      icon: 'fa-solid fa-chart-line',
                      shortDesc: 'Short summary for card presentation.',
                      fullDesc: 'Comprehensive description explaining how this service helps clients expand globally.',
                      benefits: ['Measurable organic growth', 'Dedicated bilingual strategist'],
                      features: ['Custom technical architecture', 'Real-time reporting'],
                      processSteps: [
                        { step: 1, title: 'Strategic Audit', desc: 'Analyzing current baseline.' },
                        { step: 2, title: 'Execution', desc: 'Deploying high-impact deliverables.' },
                      ],
                      deliverables: ['Weekly KPI Scorecard', 'Dedicated Account Lead'],
                      industries: ['SaaS', 'Ecommerce', 'IT & Software'],
                      whyChoose: ['Proven cross-border track record'],
                      pricingRange: '$3,000 / mo',
                      image: '/assets/images/services/seo-aeo.jpg',
                      isFeatured: false,
                      isActive: true,
                    });
                  }}
                  className="px-4 py-2 rounded-xl bg-[#1769E0] text-white text-xs font-bold hover:bg-[#155fc9] flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-plus text-xs"></i>
                  <span>Add New Service</span>
                </button>
              </div>

              {/* Service Editor Form Modal if editing */}
              {serviceEditItem && (
                <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-lg space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-sm text-[#0B1F3A]">
                      {isAddingService ? 'Add New Service' : `Editing: ${serviceEditItem.name}`}
                    </h3>
                    <button onClick={() => setServiceEditItem(null)} className="text-xs text-slate-400 hover:text-slate-600">
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleSaveService} className="space-y-4 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-[#10233F] mb-1">Service Name</label>
                        <input
                          type="text"
                          required
                          value={serviceEditItem.name}
                          onChange={(e) => setServiceEditItem({ ...serviceEditItem, name: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-[#10233F] mb-1">Font Awesome Icon Class</label>
                        <input
                          type="text"
                          required
                          value={serviceEditItem.icon}
                          onChange={(e) => setServiceEditItem({ ...serviceEditItem, icon: e.target.value })}
                          placeholder="fa-solid fa-code"
                          className="w-full px-3 py-2 border rounded-lg font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-[#10233F] mb-1">Short Description</label>
                      <input
                        type="text"
                        required
                        value={serviceEditItem.shortDesc}
                        onChange={(e) => setServiceEditItem({ ...serviceEditItem, shortDesc: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#10233F] mb-1">Full Detailed Description (for Modal)</label>
                      <textarea
                        rows={3}
                        value={serviceEditItem.fullDesc}
                        onChange={(e) => setServiceEditItem({ ...serviceEditItem, fullDesc: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-[#10233F] mb-1">Pricing Range / Starting Price</label>
                        <input
                          type="text"
                          value={serviceEditItem.pricingRange || ''}
                          onChange={(e) => setServiceEditItem({ ...serviceEditItem, pricingRange: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div className="flex items-center gap-6 pt-5">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={serviceEditItem.isFeatured}
                            onChange={(e) => setServiceEditItem({ ...serviceEditItem, isFeatured: e.target.checked })}
                          />
                          <span className="font-bold">Featured Badge</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={serviceEditItem.isActive}
                            onChange={(e) => setServiceEditItem({ ...serviceEditItem, isActive: e.target.checked })}
                          />
                          <span className="font-bold">Active / Visible</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-3 border-t">
                      <button
                        type="button"
                        onClick={() => setServiceEditItem(null)}
                        className="px-4 py-2 rounded-lg bg-slate-100 text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-[#1769E0] text-white text-xs font-bold"
                      >
                        Save Service
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* List of current services */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((srv) => (
                  <div key={srv.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center text-base shrink-0">
                        <i className={srv.icon}></i>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-[#0B1F3A]">{srv.name}</h4>
                          {srv.isFeatured && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] bg-blue-100 text-blue-700 font-bold">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{srv.shortDesc}</p>
                        <div className="text-[11px] text-[#1769E0] font-semibold mt-2">{srv.pricingRange}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <button
                        onClick={() => {
                          setIsAddingService(false);
                          setServiceEditItem({ ...srv });
                        }}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-600 text-xs"
                        title="Edit Service"
                      >
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button
                        onClick={() => handleDeleteService(srv.id)}
                        className="p-1.5 rounded-md hover:bg-red-50 text-red-500 text-xs"
                        title="Delete Service"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ASSET & MEDIA MANAGER */}
          {activeTab === 'media' && (
            <div className="space-y-6 max-w-5xl">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Global Asset &amp; Media Architecture</h2>
                <p className="text-xs text-[#52657D]">
                  PRD Mandated Asset System: Every major section has its own dedicated directory in <code>public/assets/images/</code>.
                </p>
              </div>

              {/* Section Filters */}
              <div className="flex flex-wrap gap-2 text-xs">
                {['all', 'hero', 'services', 'portfolio', 'logos', 'favicon', 'testimonials', 'industries'].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setSelectedMediaSection(sec)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      selectedMediaSection === sec
                        ? 'bg-[#1769E0] text-white font-bold'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    /{sec}/
                  </button>
                ))}
              </div>

              {/* Media Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMedia.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="h-32 bg-slate-100 rounded-lg overflow-hidden mb-3 flex items-center justify-center p-2 border border-slate-100">
                        {item.url.endsWith('.svg') ? (
                          <img src={item.url} alt={item.name} className="max-h-full object-contain" />
                        ) : (
                          <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-[#0B1F3A]">
                        <span className="truncate">{item.name}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600 font-mono">
                          {item.section}
                        </span>
                      </div>

                      <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-between">
                        <span>{item.dimensions}</span>
                        <span>{item.size}</span>
                      </div>

                      <div className="text-[11px] text-[#1769E0] font-medium mt-1">
                        Usage: {item.usage}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-slate-400 font-mono truncate max-w-[150px]">
                        {item.url}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(item.url);
                          showToast(`Copied ${item.name} path!`);
                        }}
                        className="text-[#1769E0] font-bold hover:underline"
                      >
                        Copy Path
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: LEADS & CRM */}
          {activeTab === 'leads' && (
            <div className="space-y-6 max-w-5xl">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Client Acquisition &amp; CRM Pipeline</h2>
                <p className="text-xs text-[#52657D]">
                  Manage inbound consultation inquiries, qualify leads, and update deal stages.
                </p>
              </div>

              <div className="space-y-3">
                {leads.map((lead) => (
                  <div key={lead.id} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-sm text-[#0B1F3A]">{lead.name}</span>
                        <span className="text-xs font-semibold text-slate-500">• {lead.company}</span>
                        <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1769E0] text-[10px] font-bold">
                          {lead.country}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                        <span><i className="fa-solid fa-envelope mr-1 text-slate-400"></i>{lead.email}</span>
                        <span><i className="fa-solid fa-phone mr-1 text-slate-400"></i>{lead.phone}</span>
                        <span className="text-[#1769E0] font-semibold"><i className="fa-solid fa-shapes mr-1"></i>{lead.serviceInterested}</span>
                        <span className="font-mono text-emerald-600 font-bold">{lead.budget}</span>
                      </div>

                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        "{lead.message}"
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className="text-[10px] text-slate-400 font-mono">{lead.createdAt}</div>
                      
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-500 font-medium">Stage:</span>
                        <select
                          value={lead.status}
                          onChange={(e) => handleLeadStatusChange(lead.id, e.target.value as Lead['status'])}
                          className="px-2.5 py-1 text-xs rounded-lg border border-slate-200 font-bold bg-white focus:outline-none"
                        >
                          <option value="new">New Lead</option>
                          <option value="contacted">Contacted</option>
                          <option value="mql">MQL Qualified</option>
                          <option value="proposal">Proposal Sent</option>
                          <option value="won">Client Won</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CLIENT PROJECT PORTAL */}
          {activeTab === 'portal' && (
            <div className="space-y-6 max-w-5xl">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Client Project Portal &amp; Deliverables</h2>
                <p className="text-xs text-[#52657D]">Active project milestones, timeline progression, and delivery scorecards.</p>
              </div>

              <div className="space-y-4">
                {clientProjects.map((project) => (
                  <div key={project.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-bold text-[#1769E0] uppercase tracking-wider">{project.clientName}</div>
                        <h3 className="text-base font-bold text-[#0B1F3A] mt-0.5">{project.title}</h3>
                        <div className="text-xs text-slate-500 mt-1">
                          Target Due Date: <strong>{project.dueDate}</strong>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          project.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-[#1769E0]'
                        }`}>
                          {project.status}
                        </span>
                        <div className="text-xl font-bold text-[#0B1F3A] font-mono mt-1">
                          {project.completionPercent}%
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${project.completionPercent}%` }}
                        className="bg-[#1769E0] h-full rounded-full transition-all duration-500"
                      ></div>
                    </div>

                    {/* Milestones Checklist */}
                    <div>
                      <div className="text-xs font-bold text-[#0B1F3A] mb-2">Milestone Checklist:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {project.milestones.map((m, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-600">
                            <i className={`fa-solid ${m.done ? 'fa-circle-check text-emerald-500' : 'fa-circle text-slate-300'} text-sm`}></i>
                            <span className={m.done ? 'line-through text-slate-400' : 'font-medium text-[#10233F]'}>
                              {m.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="text-slate-500">
                        Next Deliverable: <strong className="text-[#1769E0]">{project.nextDeliverable}</strong>
                      </div>
                      <button className="text-xs text-[#1769E0] font-bold hover:underline flex items-center gap-1">
                        <i className="fa-solid fa-cloud-arrow-down"></i>
                        <span>Export Project Audit</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SEO / AEO / GEO */}
          {activeTab === 'seo' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">SEO / AEO / GEO Search Engine Architecture</h2>
                <p className="text-xs text-[#52657D]">
                  Generative Engine Optimization (GEO) and AI Answer Engine Discovery standards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs">
                <div className="flex items-center justify-between pb-3 border-b">
                  <h3 className="font-bold text-sm text-[#0B1F3A]">AI Knowledge Files Configuration</h3>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                    Active on /llms.txt
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0B1F3A] mb-1">/llms.txt</div>
                    <p className="text-slate-500 text-[11px] mb-3">
                      Clean markdown summary designed for Perplexity, ChatGPT Search, and Gemini web grounding.
                    </p>
                    <a href="/llms.txt" target="_blank" rel="noreferrer" className="text-[#1769E0] font-bold hover:underline flex items-center gap-1">
                      <span>View Live llms.txt</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0B1F3A] mb-1">/llms-full.txt</div>
                    <p className="text-slate-500 text-[11px] mb-3">
                      Complete knowledge index of company services, methodologies, case studies, and team hubs.
                    </p>
                    <a href="/llms-full.txt" target="_blank" rel="noreferrer" className="text-[#1769E0] font-bold hover:underline flex items-center gap-1">
                      <span>View Live llms-full.txt</span>
                      <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <h4 className="font-bold text-[#0B1F3A] mb-2">Schema.org Structured Entities Included</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> <code>Organization</code> graph entity with logo, social sameAs, and contact.</li>
                    <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> <code>ProfessionalService</code> graph entity covering multi-territory operations.</li>
                    <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> <code>WebSite</code> schema with search metadata and publisher linkages.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: CASE STUDIES */}
          {activeTab === 'caseStudies' && (
            <div className="space-y-6 max-w-5xl">
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A]">Case Studies &amp; Measurable Proof</h2>
                <p className="text-xs text-[#52657D]">Manage featured client outcomes, quantitative percentages, and cross-border stories.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.map((study) => (
                  <div key={study.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#0B1F3A]">{study.title}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1769E0]">
                        {study.country}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500">Client: <strong>{study.client}</strong></div>

                    <div className="grid grid-cols-3 gap-2">
                      {study.results.map((r, idx) => (
                        <div key={idx} className="p-2 bg-slate-50 rounded-lg text-center">
                          <div className="text-sm font-extrabold text-[#1769E0] font-mono">{r.value}</div>
                          <div className="text-[9px] text-slate-500 uppercase">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};
