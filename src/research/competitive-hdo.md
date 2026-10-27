---
# ---------------------------------------------------------------
# A RESEARCH PROJECT PAGE. Copy this file to add a project.
# "order" sets its place in the list. Set "hidden: true" to hide it.
# ---------------------------------------------------------------
order: 1
title: Competitive hydrodeoxygenation in mixed lignin-derived feeds
short_title: Competitive HDO kinetics
status: Published · ACS Catalysis 2025
status_kind: published
role: First author
reaction: acetone + anisole <span class="arrow">→</span> propene · propane · benzene
summary: Real feeds are mixtures. I measured how lignin-derived oxygenates compete for the same active sites on MoO<sub>3</sub>, and built a kinetic way to rank how strongly each one binds.
lead: Most hydrodeoxygenation kinetics are measured one compound at a time, but lignin vapor contains dozens of oxygenates at once. This project asks what happens inside the reactor when they compete.
image: assets/img/figures/competitive-hdo-graphical-abstract.png
thumb: assets/img/figures/competitive-hdo-graphical-abstract.png
image_alt: "Graphical abstract: an aliphatic ketone and an aromatic ether compete for the same Mo site on MoO3; an arrow ranks lignin-derived oxygenates by surface adsorption strength."
image_caption: Graphical abstract.
image_credit: Reprinted from Khan et al., ACS Catal. 2025, 15, 15488–15501, published under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
links:
  - label: Read the paper (open access)
    url: https://doi.org/10.1021/acscatal.5c04264
    note: ACS Catalysis 2025, 15, 15488–15501
  - label: AIChE Annual Meeting 2024 talk
    url: publications.html
skills:
  - Packed-bed kinetics
  - Rate-law derivation
  - Online GC / GC-MS
  - TPD / TPSR
  - Mass-transfer checks
  - DFT collaboration
collaborators: Z. H. Fard, A. J. Kohler, L. T. Roling (DFT), B. H. Shanks
---

## The question

Pyrolysis breaks lignin into a vapor full of different oxygenates: ketones and aldehydes from the side chains, and aromatic ethers and phenolics from the rings. Most studies, including the ones that established MoO<sub>3</sub> as a hydrodeoxygenation catalyst, fed one model compound at a time. That gives a clean mechanism, but it hides the fact that in a real feed the molecules fight over the same active sites. Kinetics measured that way can badly mislead reactor design.

## What I did

I co-fed acetone, a stand-in for the aliphatic oxygenates, together with anisole, a stand-in for the aromatic ethers, over reduced bulk MoO<sub>3</sub> at ambient hydrogen pressure. By varying the partial pressure of each compound while holding the other fixed, I measured how each one changes the other's rate, product distribution and mechanism.

From those rate dependencies I derived a competitive rate law and used it to extract **relative adsorption constants**, a kinetic measure of how strongly each oxygenate holds onto the HDO active site. Temperature-programmed desorption and surface-reaction experiments, and DFT calculations by our collaborators, helped interpret the surface picture.

## What we learned

- **The ketone wins.** Acetone strongly suppresses anisole deoxygenation, while anisole barely affects acetone. The aliphatic oxygenate binds much more strongly to the active site than the aromatic ether.
- **The mechanism survives the mixture.** Both molecules still follow the same sequential-hydrogenation pathway they follow alone, and the product slate stays the same.
- **Electron density on the oxygen matters.** Adsorption strength tracks how electron-rich the oxygen atom is, with opposite trends for aliphatic and aromatic molecules. That points to an optimal electron density for adsorption, a volcano-type relationship.

## Why it matters for industry

In a mixed feed, the strongest binders occupy the sites first and starve the weaker ones. Fully deoxygenating lignin vapor will therefore likely need **staged catalyst beds or a multi-pass reactor**, not a single bed sized from single-compound data. The kinetic method itself can be reused to rank adsorption in other multi-component feeds.
