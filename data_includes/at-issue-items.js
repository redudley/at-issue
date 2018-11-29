
var shuffleSequence = seq(
                             "consent",
                             "instructions",
                             "story",
                             randomize("politics"),
                             "subj_info", "sr", "code"
                            );

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence.",
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: false,
        saveReactionTime: true,
    },
    "Question", {
        hideProgressBar: true,
        hasCorrect: true,
    },
];

var manualSendResults = true;

var items = [

    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    ["setcounter", "__SetCounter__", { }],

    ["consent", "Form", {html: {include: 'consent.html'}}], //3

    ["instructions", "Form", {html: {include: 'instructions.html'}}], //4

    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}}, //5 - mismatch: belief QUD, fact is at issue in question
                            "Question", {q: "What's in the box, according to John?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was John right about that?",
                                        as: ["no", "yes"]},
                                        ],


    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}}, //6 - match: fact QUD, fact is at issue in question
                            "Question", {q: "What's in the box, according to John?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was John right about that?",
                                        as: ["no", "yes"]},
                                        ],


    [["story", 1], "Form", {html: {include: 'John_bomb_belief_story_pillow.html'}}, //7 - match: belief QUD, belief is at issue in question
                            "Question", {q: "What does John think is in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was John right about that?",
                                        as: ["no", "yes"]},
                                        ],


    [["story", 1], "Form", {html: {include: 'John_bomb_fact_story_pillow.html'}}, //8 - mismatch: fact QUD, belief is at issue in question
                            "Question", {q: "What does John think is in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was John right about that?",
                                        as: ["no", "yes"]},
                                        ],

    [["story", 1], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}}, //9 - mismatch: belief QUD, fact is at issue in question
                            "Question", {q: "What's in the box, according to Mary?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was Mary right about that?",
                                        as: ["no", "yes"]},
                                        ],


    [["story", 1], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}}, //10 - match: fact QUD, fact is at issue in question
                            "Question", {q: "What's in the box, according to Mary?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was Mary right about that?",
                                        as: ["no", "yes"]},
                                        ],


    [["story", 1], "Form", {html: {include: 'Mary_bomb_belief_story_pillow.html'}}, //11 - match: belief QUD, belief is at issue in question
                            "Question", {q: "What does Mary think is in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was Mary right about that?",
                                        as: ["no", "yes"]},
                                        ],


    [["story", 1], "Form", {html: {include: 'Mary_bomb_fact_story_pillow.html'}}, //12 - mismatch: fact QUD, belief is at issue in question
                            "Question", {q: "What does Mary think is in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "What was really in the box?",
                                        as: ["a bomb", "a pillow"]},
                            "Question", {q: "Was Mary right about that?",
                                        as: ["no", "yes"]},
                                        ],

    ["politics", "Question", {q: "How worried are you about bombs being sent to government officials?",  //13
                              as: [["1","very worried"], ["2","a little worried"], ["3","not at all worried"]],
                              hasCorrect: false}],

    ["politics", "Question", {q: "How worried are you about taxpayer money being wasted?",  //14
                              as: [["1","very worried"], ["2","a little worried"], ["3","not at all worried"]],
                              hasCorrect: false}],

    ["subj_info", "Form", {html: {include: 'subject_info_political.html'}}], //15

    ["code", "Form", {html: {include: 'code.html'}}], //16


];
