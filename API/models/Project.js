const mongoose = require("mongoose");
const User = require("./User");
const ProjectSchema = mongoose.Schema(
  {

    ChooseName: { type: String, minLength: 10 },
    userid: { type: String },
    Tellus: { type: String },
    state: { type: String, default: "Pending" },
    uploadimg: { type: String },
    postproject: { type: String },
    pay: { type: String, default: null },
    freelances: [
      {
        freelanceid: { type: String, default: null },
        deccription: { type: String, default: null },
        date: { type: Date },
        BidAmount: { type: String },
        numberofDay: { type: String },
      }
    ],
    millstobepayment: [
      {
        paymentmilestone: { type: String },
        datemileStone: { type: String },
        date: { type: Date },

      }
    ],

    freelanceId: { type: String },
    feedbackfreelancer: { type: String },
    feedbackcilent: { type: String },
    reviewfreelancer: { type: String },
    reviewclient: { type: String },
    budget: { type: String, default: null },
    CurrencyCode: { type: String, default: null },
    CurrencySymbol: { type: String, default: null },
    step_Four_Currency_code: { type: String, default: null },
    Minimum_Per_hour: { type: Number, default: null },
    Maximum_Per_hour: { type: Number, default: null },
    Maximum_fix_price: { type: Number, default: null },
    Minimum_fix_price: { type: Number, default: null },
    Day: { type: String, default: null },
    type_of_project: { type: String, default: null },
    GUARANTEED: { type: String, default: null },
    FEATURED: { type: String, default: null },
    TOP_CONTEST: { type: String, default: null },
    HIGHLIGHT: { type: String, default: null },
    SEALED: { type: String, default: null },
    NDA: { type: String, default: null },
    PRIVATE: { type: String, default: null },
    StepFiveLongContest: { type: String, default: null },
    NewBudget: { type: String, default: null },
    Newdate: { type: Date },

  },
  { timestamps: true }
);
module.exports = mongoose.model("Project", ProjectSchema);