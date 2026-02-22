"use client"

import { ShieldCheck, FileCheck, Landmark, Scale, CheckCircle2 } from "lucide-react"

const registrations = [
  {
    label: "GSTIN",
    value: "29BMEPP1005K1Z2",
    icon: Landmark,
  },
  {
    label: "PF Code",
    value: "GBHBL1833585000",
    icon: FileCheck,
  },
  {
    label: "ESI No.",
    value: "58005115810001019",
    icon: ShieldCheck,
  },
  {
    label: "Labour License",
    value: "ALC-5/CLA/C-100041125/2020-21",
    icon: Scale,
  },
]

export default function CompliancePage() {
  return (
    <div className="flex flex-col">
      {/* Sub-hero */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4 uppercase">
            LEGAL & <span className="text-brand-red">COMPLIANCE</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Fully compliant with Indian Labour Laws, PF, ESI, GST, and Contract Labour Act.
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-brand-red skew-x-12 translate-x-1/2 opacity-20"></div>
      </section>

      {/* Registrations Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrations.map((reg, idx) => (
              <div key={idx} className="bg-white border p-8 hover:border-brand-red transition-all group">
                <reg.icon className="w-10 h-10 text-brand-red mb-6" />
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{reg.label}</p>
                <h3 className="text-xl font-heading font-black text-brand-dark break-all">{reg.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Assurance */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl font-heading font-black text-brand-dark mb-8">RISK-FREE OUTSOURCING</h2>
                <div className="h-2 w-24 bg-brand-red mb-12"></div>
                <div className="space-y-6">
                   {[
                     "Fully compliant with PF, ESI, GST & Contract Labour Act.",
                     "Timely submission of all statutory returns and challans.",
                     "Maintenance of all required registers and records as per law.",
                     "Transparent billing and automated compliance documentation.",
                     "Zero liability for the principal employer regarding labour unrest.",
                   ].map((text, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                        <p className="font-bold text-brand-dark">{text}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="bg-brand-dark p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-heading font-black mb-6 uppercase tracking-tight">Our Commitment</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                   At Om Sai Enterprises, we believe that compliance is not just a legal requirement but a commitment to our workforce and our clients. We ensure that every worker is covered under insurance and social security schemes, providing peace of mind to the industrial units we serve.
                </p>
                <div className="p-6 bg-white/5 border border-white/10 italic text-sm text-brand-red">
                   "We handle the complexities of labour laws so you can focus on your core production."
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Verification Badge */}
      <section className="py-24">
         <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto border-4 border-dashed border-brand-red/20 p-12">
               <ShieldCheck className="w-20 h-20 text-brand-red mx-auto mb-8" />
               <h3 className="text-3xl font-heading font-black text-brand-dark mb-4">VERIFIED INDUSTRIAL VENDOR</h3>
               <p className="text-muted-foreground leading-relaxed mb-8">
                  Om Sai Enterprises is a registered and verified vendor for major industrial plants in the Belagavi region. Our compliance documents are always available for audit and verification by our clients' HR and legal teams.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  <div className="px-6 py-3 bg-muted font-bold text-xs uppercase tracking-widest text-brand-dark">PF Registered</div>
                  <div className="px-6 py-3 bg-muted font-bold text-xs uppercase tracking-widest text-brand-dark">ESI Covered</div>
                  <div className="px-6 py-3 bg-muted font-bold text-xs uppercase tracking-widest text-brand-dark">GST Compliant</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
