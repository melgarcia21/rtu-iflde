export interface NewsPost {
  id: string;
  title: string;
  content: string;
  link: string;
  embedUrl: string;
  fbCaption: string;
  fullContent?: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: 'flexilearn-pro-update',
    title: 'FlexiLearnPro Program Development Update',
    content: 'Stay updated with our latest announcements and developments.',
    link: '/news/flexilearn-pro-update',
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FRizTechUniversity%2Fposts%2Fpfbid022UkBH9u6atPK5X9qBnRmYwXmeMJA3mpor4fWfg5yTGqkGCK194Bw4hwj4BkWbgbol&show_text=true&width=500',
    fbCaption: 'We are excited to announce the latest developments in our FlexiLearnPro program. Our team has been working hard to bring you enhanced features and improved learning experiences.',
    fullContent: 'Full article content here...'
  },
  {
    id: 'clsu-collaboration',
    title: 'New Collaboration with CLSU',
    content: 'Learn more about our partnership with Central Luzon State University.',
    link: '/news/clsu-collaboration',
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D1105949918224469%26set%3Da.460450712774396%26type%3D3&show_text=true&width=500',
    fbCaption: 'We are proud to announce our partnership with Central Luzon State University. Together, we will create more opportunities for students in the region.',
    fullContent: 'Full article content here...'
  },
  {
    id: 'flexilearn-pro-launch',
    title: 'FlexiLearnPro Launches at PSU, DMMMSU, and CLSU',
    content: 'IFLDE launches FlexiLearnPro program at multiple state universities.',
    link: '/news/flexilearn-pro-launch',
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frtuiflde%2Fposts%2Fpfbid02B7oRazd5wbSKRp26XWRKRi8pEvCFnRGweHGvDSSjgrshiVs53v2J32KCuRqj6MVql&show_text=true&width=500',
    fbCaption: '𝑰𝑭𝑳𝑫𝑬 𝒍𝒂𝒖𝒏𝒄𝒉𝒆𝒔 𝑭𝒍𝒆𝒙𝒊𝑳𝒆𝒂𝒓𝒏𝑷𝒓𝒐 𝒂𝒕 𝑷𝑺𝑼, 𝑫𝑴𝑴𝑴𝑺𝑼, 𝒂𝒏𝒅 𝑪𝑳𝑺𝑼\nThe 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞 𝐨𝐟 𝐅𝐥𝐞𝐱𝐢𝐛𝐥𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐚𝐧𝐝 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 (𝐈𝐅𝐋𝐃𝐄) conducted the first phase of benchmarking activities...',
    fullContent: 'Full article content will be added here...'
  },
  {
    id: 'e-rtu-accounts',
    title: 'E-RTU Accounts Now Available',
    content: 'Now that you already have your e-RTU accounts, maximize your experience by exploring the different features of e-RTU!',
    link: '/news/e-rtu-accounts',
    embedUrl: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Frtuiflde%2Fposts%2Fpfbid02tQEdd8fVKg9Kt4MTi7fzU15y3ZUNEHdiFYWg8seS4iz6iqjyUBQ1cYirVrqjLt8gl&show_text=true&width=500',
    fbCaption: 'Now that you already have your e-RTU accounts, maximize your experience by exploring the different features of e-RTU! From logging in to the platform to accessing your enrolled courses to taking assessments and many more, be guided by our Reference Material for students and faculty!',
    fullContent: 'Full article content will be added here...'
  }
];