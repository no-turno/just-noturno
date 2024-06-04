{ pkgs }: {
  environment.systemPackages = [
    pkgs.nodejs_22
  ];
  
  deps = [
    pkgs.nixos-rebuild 
    pkgs.arkade
    pkgs.swc
    pkgs.vscode-langservers-extracted
    pkgs.nodePackages_latest.typescript-language-server
  ];
}