# Backlog: Arslantepe + Türkiye höyükleri — SEO & GEO plan

**Status:** queued (user 2026-07-27) — do not forget; execute as dedicated sprint.  
**Site context:** privateturkeytour.com — English-only sales site for private Turkey tours.  
**North star:** archaeology/höyük demand → private guided days → multi-day southeast/central Anatolia itineraries.

## Goal

Kapsamlı, arama hacmine dayalı konumlandırma: Arslantepe odaklı + Türkiye’deki önemli höyüklerin tamamı için topical map, hedef keyword’ler, GEO (LLM/answer engines), schema ve satış hunisi.

## Positioning draft (to refine with volume data)

| Layer | Role | Example |
|-------|------|---------|
| Pillar | Money + authority hub | `/guides/turkey-archaeological-sites` or `/destinations/anatolian-hoyuks` (slug TBD by KW research) |
| Cluster | Named site pages | Arslantepe, Göbeklitepe, Çatalhöyük, Troy höyük chapter, Hattuşa, Alacahöyük, Kültepe… |
| Support | Planning / comparison | best höyüks to visit, Göbeklitepe vs Çatalhöyük, southeast Turkey itinerary |
| Product | Sellable SKUs | private Göbeklitepe day, Gaziantep+Göbeklitepe 2–3 day, Arslantepe from Malatya/Kayseri arc |

**Sales rule:** every höyük page must answer “how this fits a private Turkey tour” + enquire CTA — not museum brochure copy only.

## Keyword families to research (volume-first)

1. **Head / VH–H:** gobekli tepe tour, catalhoyuk, troy turkey, hattusa, archaeological sites turkey  
2. **Arslantepe cluster:** arslantepe, arslantepe mound, arslantepe unesco, malatya arslantepe tour  
3. **Generic höyük:** hoyuk turkey, archaeological mound turkey, prehistoric sites turkey  
4. **Itinerary money:** eastern turkey itinerary, southeast turkey tour, gaziantep gobekli tepe  
5. **GEO questions:** what is a hoyuk, oldest temple turkey, unesco archaeological sites turkey  

Validate with Ads/Keyword tools before locking focus keywords; prefer EN commercial + informational mix.

## Entity / GEO checklist

- [ ] Consistent EN naming + Turkish original in body once  
- [ ] UNESCO / period / region facts in Quick Answer  
- [ ] FAQ schema for “worth visiting”, “how long”, “from where”  
- [ ] RelatedLinks to Ephesus, Troy/Gallipoli, Pamukkale, Gaziantep food, private tours hub  
- [ ] `llms.txt` / topical-map spokes when live  
- [ ] IndexNow after publish  

## Site IA sketch (TBD after KW volumes)

```
Pillar: Anatolian archaeological sites / höyüks
├── Arslantepe (priority named cluster)
├── Göbeklitepe
├── Çatalhöyük
├── Hattuşa & Alacahöyük
├── Troy (link existing Gallipoli–Troy; deepen höyük angle)
├── Kültepe / other volume-backed sites
└── Support: how to plan archaeology-focused private Turkey tour
```

## Execution order (when sprint starts)

1. Volume scrape + prioritize top 8–12 entities  
2. Lock focus keywords + slugs  
3. Update `keywords.ts` + topical map  
4. Write pillar + Arslantepe deep page first  
5. Remaining clusters by volume  
6. Product packaging (2–3 day SE Anatolia)  
7. Deploy + IndexNow  

## Out of scope until sprint

Do not create thin stub pages for every höyük without volume justification.
