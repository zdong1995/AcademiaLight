#!/bin/bash

# 确保在 AcademiaLight 根目录下执行
if [ ! -f "theme.toml" ]; then
    echo "Please run this script from the theme root directory"
    exit 1
fi

# 创建必要的目录
mkdir -p exampleSite/themes

# 创建符号链接
cd exampleSite/themes
ln -sf ../.. AcademiaLight

echo "Development environment setup completed!"
echo "You can now run: hugo server --source=exampleSite" 