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
/*
    // Repository settings
    hostRules: [
        {
            hostType: 'docker',
            matchHost: 'harbor.your-domain.com',
            username: process.env.HARBOR_USER,
            password: process.env.HARBOR_PASSWORD
        },
        {
            hostType: 'maven',
            matchHost: 'nexus.your-domain.com',
            username: process.env.NEXUS_USER,
            password: process.env.NEXUS_PASSWORD
        },
        {
            hostType: 'npm',
            matchHost: 'nexus.your-domain.com',
            username: process.env.NEXUS_USER,
            password: process.env.NEXUS_PASSWORD
        }
    ],
 */   

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
            branchTopic: 'all_dependency'
        }
    ]
};
