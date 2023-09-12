// api/crmIntegration.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const body = req.body;

  if (!body || body.eventType !== "FORM_RESPONSE") {
    return res.status(400).json({ error: "Invalid payload" });
  }

  const formData = body.data;

  const data = {
    name: getValue(formData.fields, "Name"),
    phone: getValue(formData.fields, "Contact details"),
    email: getValue(formData.fields, "Email address"),
    state: getOptionText(formData.fields, "State or territory"),
    smoker: getOptionText(formData.fields, "Are you a smoker?"),
    occupation: getValue(formData.fields, "Occupation"),
    annual_income: getOptionText(formData.fields, "Annual income"),
    cover_amount: getOptionText(formData.fields, "Cover amount"),
    key: "hNFSih16m4IrTFAf146xL7BwQ32wQgdm", // your API key
  };

  try {
    const response = await fetch(
      "https://crm.idealcover.com.au/api/post_lead/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseBody = await response.json();
    res.status(200).json(responseBody);
  } catch (error) {
    res.status(500).json({ error: "Failed to send data to CRM" });
  }
};

function getValue(fields, label) {
  const field = fields.find((f) => f.label === label);
  return field ? field.value : null;
}

function getOptionText(fields, label) {
  const field = fields.find((f) => f.label === label);
  if (field && field.options) {
    const option = field.options.find((opt) => field.value.includes(opt.id));
    return option ? option.text : null;
  }
  return null;
}
