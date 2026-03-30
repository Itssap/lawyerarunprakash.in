// ============================================================
// ARTICLES.JS — Your article database
// ============================================================
// CATEGORIES AVAILABLE:
//   "SLP & Supreme Court"
//   "Criminal Law"
//   "High Court & Appeals"
//   "Bail & Custody"
//   "Transfer & Jurisdiction"
//
// HOW TO ADD A NEW ARTICLE:
// 1. Copy a block from below (from { to },)
// 2. Paste it at the TOP of the articles array
// 3. Fill in all fields
// 4. Use HEADING: for section headings inside content
// 5. Use HIGHLIGHT: for important quote boxes
// 6. Save and upload to GitHub. Done.
// ============================================================

const categories = [
  {
    id: "slp",
    name: "SLP & Supreme Court",
    icon: "⚖️",
    description: "Special Leave Petitions, Supreme Court procedure, and apex court practice"
  },
  {
    id: "criminal",
    name: "Criminal Law",
    icon: "🔒",
    description: "Criminal trials, offences, sentencing, and defence at all court levels"
  },
  {
    id: "highcourt",
    name: "High Court & Appeals",
    icon: "🏛️",
    description: "Appeals, revisions, and remedies before High Courts across India"
  },
  {
    id: "bail",
    name: "Bail & Custody",
    icon: "🗝️",
    description: "Regular bail, anticipatory bail, interim bail, and custody matters"
  },
  {
    id: "transfer",
    name: "Transfer & Jurisdiction",
    icon: "🔄",
    description: "Transfer petitions, jurisdiction of courts, and forum selection"
  }
];

const articles = [

  {
    id: "high-court-dismissal",
    title: "What Happens When Your Case is Dismissed by the High Court?",
    date: "March 2026",
    category: "High Court & Appeals",
    categoryId: "highcourt",
    intro: "A High Court dismissal can feel like the end of the road. But in India, it is not. Here is what you need to know about your options.",
    content: `Receiving an unfavourable judgment from the High Court can be one of the most difficult moments a person and their family faces. Years of litigation, hope, and effort — and then a dismissal. It can feel like the end of the road.

But it is not.

In India, a High Court dismissal does not mean your legal journey is over. The Constitution of India provides every citizen the right to seek justice — and the Supreme Court of India stands as the final guardian of that right.

HIGHLIGHT: Under Article 136 of the Constitution of India, the Supreme Court has the power to grant special leave to appeal against any judgment of any court in the country.

HEADING: Understanding What "Dismissed" Means

When the High Court dismisses a case, it means the court has decided not to interfere with the judgment or order passed by the lower court. In a criminal matter, this could mean the conviction and sentence stand. In a civil matter, the decree against you is confirmed.

However, a dismissal by the High Court does not extinguish your legal rights. It simply means you must now consider your next step carefully — and that next step, in most cases, is the Supreme Court of India.

HEADING: Option 1 — File a Special Leave Petition (SLP)

This is the most common route. Under Article 136 of the Constitution, any aggrieved person can file an SLP before the Supreme Court seeking special leave — or permission — to appeal against the High Court's judgment. The Supreme Court will first examine whether the matter deserves to be heard. If it finds merit, it admits the case and proceeds to hear it on merits.

HEADING: Option 2 — File a Review Petition Before the High Court

If you believe the High Court committed an error apparent on the face of the record — such as overlooking a key document or misreading a legal provision — you can file a Review Petition before the same High Court. This must generally be filed within 30 days of the judgment.

HEADING: Option 3 — File a Curative Petition

A Curative Petition is a rare remedy available before the Supreme Court after a Review Petition has been dismissed. It is available only in exceptional circumstances where there has been a grave miscarriage of justice or a violation of principles of natural justice.

HEADING: What is the Time Limit to File an SLP?

Time is critical after a High Court judgment. The limitation period for filing an SLP is generally 90 days from the date of the High Court judgment in civil matters, and 60 days in criminal matters.

If the limitation period has expired, you can still file an SLP along with an application for condonation of delay — but the delay must be explained with valid reasons. It is always advisable to act promptly.

HEADING: What Happens After an SLP is Filed?

Once an SLP is filed before the Supreme Court, the matter is listed for an admission hearing before a bench. If the Court finds prima facie merit, it issues notice to the respondent. In appropriate cases, it may also stay the operation of the High Court's judgment pending the hearing. After hearing both sides briefly, the Court decides whether to admit the SLP for a full hearing on merits.

HEADING: Should You Approach the Supreme Court?

Not every High Court dismissal warrants an SLP. Before taking that step, it is important to honestly assess the merits of the case, the strength of the grounds of challenge, and the practical implications of continuing litigation.

What is important to know is this — if there is genuine merit in your case, the doors of the Supreme Court of India are open to you, regardless of which State you belong to or where your case was originally filed.`
  }

  // ---- PASTE YOUR NEXT ARTICLE ABOVE THIS LINE ----
  // Template:
  //
  // ,{
  //   id: "unique-id",
  //   title: "Article Title",
  //   date: "April 2026",
  //   category: "SLP & Supreme Court",
  //   categoryId: "slp",
  //   intro: "One line summary shown on the listing page.",
  //   content: `First paragraph here.
  //
  // Second paragraph here.
  //
  // HEADING: Section Heading
  //
  // More content here.
  //
  // HIGHLIGHT: Key legal point or important note here.`
  // }

];
