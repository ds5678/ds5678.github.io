import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  title: "Jeremy Pritts",
  description: "Full-Stack Software Engineer",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: {
      light: '/logo_light.svg',
      dark: '/logo_dark.svg'
    },

    nav: nav(),

    sidebar: {
      '/projects/': { base: '/projects/', items: sidebarProjects() },
      '/skills/': { base: '/skills/', items: sidebarSkills() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ds5678' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Projects',
      link: '/projects/assetripper',
      activeMatch: '/projects/'
    },
    {
      text: 'Skills',
      link: '/skills/dotnet',
      activeMatch: '/skills/'
    }
  ]
}

function sidebarProjects(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Projects',
      items: [
        { text: 'AssetRipper', link: 'assetripper' },
        { text: 'C++ Translation', link: 'cpp-translation' },
        { text: 'LibTorchSharp Bindings', link: 'libtorchsharp-bindings' },
        { text: 'Texture Decoding', link: 'texture-decoder' },
        { text: 'Il2CppInterop', link: 'il2cpp-interop' },
        { text: 'Other', link: 'other' }
      ]
    }
  ]
}

function sidebarSkills(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Skills',
      items: [
        { text: '.NET', link: 'dotnet' },
        { text: 'Low-Level Programming', link: 'low-level-programming' },
        { text: 'Game Development', link: 'game-development' },
        { text: 'Web Development', link: 'web-development' },
        { text: 'Graphics Programming', link: 'graphics-programming' },
        { text: 'Source Generation', link: 'source-generation' }
      ]
    }
  ]
}
