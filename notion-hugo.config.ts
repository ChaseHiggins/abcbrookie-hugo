import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/Notion-DoIt-162462f4e63080ddbfb3dfa9cd36c311',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '162462f4e63080ddbfb3dfa9cd36c311',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: '162462f4e63081f5becaf185d00e6774',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
