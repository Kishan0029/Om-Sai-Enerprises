path = 'C:/Users/kisha/orchids-projects/orchids-om-sai-enterprises-remix/src/app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old = 'TRUSTED BY INDUSTRIES ACROSS <span className="text-brand-red">BELAGAVI</span>\n          </h2>\n        </div>'
new = 'TRUSTED BY INDUSTRIES ACROSS <span className="text-brand-red">BELAGAVI</span>\n          </h2>\n        </div>'

# Change mb-6 to mb-12 on the heading line
old = '          <h2 className="text-center font-heading font-black text-brand-dark uppercase tracking-tighter mb-6 text-2xl md:text-3xl">'
new = '          <h2 className="text-center font-heading font-black text-brand-dark uppercase tracking-tighter mb-12 text-2xl md:text-3xl">'

if old in content:
    content = content.replace(old, new)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Done!")
else:
    print("ERROR: string not found")
