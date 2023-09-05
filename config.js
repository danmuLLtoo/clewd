/*
* https://rentry.org/teralomaniac_clewd
* https://github.com/teralomaniac/clewd
*/

// SET YOUR COOKIE BELOW

module.exports = {
    "Cookie":"sessionKey=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",
    "CookieArray": [],
    "Cookiecounter": 0,
    "Ip": "127.0.0.1",
    "Port": 8444,
    "BufferSize": 1,
    "SystemInterval": 3,
    "rProxy": "https://claude.ai",
    "padtxt_placeholder": "",
    "PromptExperimentFirst": "",
    "PromptExperimentNext": "",
    "PersonalityFormat": "{{char}}'s personality: {{personality}}",
    "ScenarioFormat": "Dialogue scenario: {{scenario}}",
    "Settings": {
        "RenewAlways": true,
        "RetryRegenerate": false,
        "PromptExperiments": true,
        "SystemExperiments": true,
        "PreventImperson": false,
        "AllSamples": false,
        "NoSamples": false,
        "StripAssistant": false,
        "StripHuman": false,
        "PassParams": false,
        "ClearFlags": true,
        "PreserveChats": true,
        "LogMessages": true,
        "FullColon": true,
        "padtxt": 102400,
        "xmlPlot": true,
        "localtunnel": false,
        "Superfetch": true
    }
}

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */