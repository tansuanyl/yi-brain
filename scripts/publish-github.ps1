param(
  [Parameter(Mandatory = $true)]
  [string]$RemoteUrl,

  [string]$Branch = "codex/yi-brain"
)

git init
git checkout -b $Branch
git add .
git commit -m "feat: initial Yi-Brain app"
git remote remove origin 2>$null
git remote add origin $RemoteUrl
git push -u origin $Branch
