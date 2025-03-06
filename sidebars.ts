import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome to Web Automation',
    },
    {
      type: 'category',
      label: 'Documentation',
      items: [
        {
          type: 'doc',
          id: 'Documentation/Key Features/features',
          label: 'Key Features',
        },
        {
          type: 'category',
          label: 'System Architecture',
          items: [
            {
              type: 'doc',
              id: 'Documentation/System Architecture/Architecture',
              label: 'Architecture',
            },
            {
              type: 'doc',
              id: 'Documentation/System Architecture/Data-Flow',
              label: 'Data-Flow',
            },
            {
              type: 'doc',
              id: 'Documentation/System Architecture/Use-Case',
              label: 'Use-Case',
            },
          ],
        },
        {
          type: 'category',
          label: 'Technology Stack',
          items: [
            {
              type: 'doc',
              id: 'Documentation/Technology Stack/Our-stack',
              label: 'Our-stack',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Workflow',
      items: [
        {
          type: 'category',
          label: 'Login',
          items: [
            {
              type: 'doc',
              id: 'User Workflow/Login/Sign-In-Form',
              label: 'Sign-In-Form',
            },
            {
              type: 'doc',
              id: 'User Workflow/Login/Forget-Password',
              label: 'Forget-Password',
            },
          ],
        },
        {
          type: 'category',
          label: 'Dashboard',
          items: [
            {
              type: 'doc',
              id: 'User Workflow/Dashboard/Intro',
              label: 'Intro',
            },
            {
              type: 'category',
              label: 'Modules',
              items: [
                {
                  type: 'doc',
                  id: 'User Workflow/Dashboard/Modules/Exp-Application-Form',
                  label: 'Exp-Application-Form',
                },
                {
                  type: 'doc',
                  id: 'User Workflow/Dashboard/Modules/Exp-Data-Collection',
                  label: 'Exp-Data-Collection',
                },
                {
                  type: 'doc',
                  id: 'User Workflow/Dashboard/Modules/Data-Duplication',
                  label: 'Data-Duplication',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'User Aids',
          items: [
            {
              type: 'doc',
              id: 'User Workflow/User-Aids/Data-Processing-Log',
              label: 'Data-Processing-Log',
            },
            {
              type: 'doc',
              id: 'User Workflow/User-Aids/End-point-alert',
              label: 'End-point-alert',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;