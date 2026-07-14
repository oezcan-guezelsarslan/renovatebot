module.exports = {
    platform: 'github',
    autodiscover: true,
    fetchReleaseNotes: "none",
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

    // Global rules applied across all discovered repositories
    packageRules: [
        {
            // Matches absolutely all dependencies
            matchPackagePatterns: ['*'],
            groupName: 'all_dependencies',

            // Force major, minor, patch, and pin updates into this same group
            separateMajorMinor: false,
            separateMinorPatch: false,
            separateMultipleMajor: false,

            // Branch topic definitions (Leave branchPrefix to global config scope)
            branchTopic: 'all_dependency'
        }
    ]
};
