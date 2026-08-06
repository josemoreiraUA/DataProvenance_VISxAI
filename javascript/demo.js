const samples = {
  sample1: {
    pred: "Low Risk (89%)",
    trans: "MinMax Scaler v1.2",
    source: "Batch_2024_Q1.csv",
    log: "LINEAGE TRACE:\n↳ Origin: Primary Credit API Feed\n↳ Ingested: 2024-01-15\n↳ Preprocessing: Null values imputed using median"
  },
  sample2: {
    pred: "Flagged (Review)",
    trans: "Zero-Fill Drop Rule",
    source: "Batch_2023_Legacy.csv",
    log: "LINEAGE TRACE:\n↳ Origin: Legacy Portal\n↳ Ingested: 2023-09-10\n↳ Preprocessing: Anomaly flag applied during pipeline ingestion"
  }
};

function updateSample(key, btn) {
  document.querySelectorAll('.controls .btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const data = samples[key];
  if (data) {
    document.getElementById('val-pred').textContent = data.pred;
    document.getElementById('val-trans').textContent = data.trans;
    document.getElementById('val-source').textContent = data.source;
    document.getElementById('val-log').textContent = data.log;
  }
}