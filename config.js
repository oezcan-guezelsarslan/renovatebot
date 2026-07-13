module.exports = {
    platform: 'github',
    autodiscover: true,
    autodiscoverFilter: [
        'oezcan-guezelsarslan/*',
       '!oezcan-guezelsarslan/renovatebot',
    ],
    requireConfig: 'optional',
    recreateWhen: 'always',
    branchPrefix: 'renovate/',

    onboarding: false,
    dependencyDashboard: false,

    suppressNotifications: [
        'deprecationWarningIssues',
        'dependencyLookupWarnings',
        'configErrorIssues',
        'artifactErrors'
    ],

    packageRules: [
        {
            matchPackageNames: ['/.*/'],
            groupName: 'all_dependencies',

            // Force major, minor, patch, and pin updates into this same group
            separateMajorMinor: false,
            separateMinorPatch: false,
            separateMultipleMajor: false,

            // Branch naming rules
            branchPrefix: 'renovate/',
            branchTopic: 'all_dependency',
            branchNameStrict: true
        }
    ],

    onboardingConfig: {
        $schema: 'https://docs.renovatebot.com/renovate-schema.json',
        extends: ['config:recommended'],
        packageRules: [
            {
                matchPackageNames: ['/.*/'],
                groupName: 'all_dependencies',
                separateMajorMinor: false,
                separateMinorPatch: false,
                branchNameStrict: true
            }
        ]
    }
};