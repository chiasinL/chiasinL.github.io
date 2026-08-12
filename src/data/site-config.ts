import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'red panda'
    },
    title: 'Chia Sin Liew',
    subtitle: 'Bioinformatics & Multi-Omics',
    description: 'Portfolio and research showcase of Chia Sin Liew, Ph.D. — expertise in bioinformatics, specializing in high-dimensional multi-omics, single-cell analysis, and scalable, reproducible pipelines.',
    image: {
        src: '',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Research & Projects',
            href: '/research'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/chiasinl'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/chia-sin-liew'
        }
    ],
    hero: {
        title: 'Chia Sin Liew, Ph.D. — Computational Biology & Multi-Omics Research',
        text: "I'm **Chia Sin Liew**, a computational biologist at the University of Nebraska–Lincoln Bioinformatics Core.\nI bridge wet- and dry-lab research by translating complex multi-omics, single-cell, transcriptomic, and metagenomic datasets into actionable biological insights.\nGuided by scientific rigor and effective cross-disciplinary communication, I develop tailored solutions—including custom analytical workflows—to address unique research challenges.\n\nFeel free to connect with me on [LinkedIn](https://linkedin.com/in/chia-sin-liew).",
        image: {
            src: hero,
            alt: 'A person standing in front of a lake'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
